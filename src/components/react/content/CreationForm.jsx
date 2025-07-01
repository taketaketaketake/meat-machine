// src/components/react/content/CreationForm.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/supabase.ts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function CreationForm({ mode = 'create', initialData = null, creationId = null }) {
  const [title, setTitle] = useState('');
  const [prompt, setPrompt] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Pre-fill the form if we are in 'edit' mode
  useEffect(() => {
    if (mode === 'edit' && initialData) {
      setTitle(initialData.title || '');
      setPrompt(initialData.prompt || '');
    }
  }, [mode, initialData]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === 'create' && !file) {
      setError('Please select a file to upload.');
      return;
    }
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('You must be logged in to manage content.');

      let fileUrl = initialData?.file_url;

      // 1. If a new file is provided, upload it
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `${user.id}/${fileName}`;
        
        const { error: uploadError } = await supabase.storage
          .from('creations')
          .upload(filePath, file, { upsert: mode === 'edit' }); // Use upsert for edits to overwrite

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage.from('creations').getPublicUrl(filePath);
        fileUrl = publicUrl;
      }

      if (!fileUrl) throw new Error("Could not determine the file URL.");

      // 2. Prepare data for the database
      const creationData = {
        user_id: user.id,
        title,
        prompt,
        file_url: fileUrl,
      };

      // 3. Insert or Update the record
      if (mode === 'create') {
        const { error: insertError } = await supabase.from('creations').insert(creationData);
        if (insertError) throw insertError;
        setMessage('Creation uploaded successfully!');
        // Redirect or clear form
        window.location.href = '/dashboard';
      } else {
        const { error: updateError } = await supabase.from('creations').update(creationData).eq('id', creationId);
        if (updateError) throw updateError;
        setMessage('Creation updated successfully!');
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-xl border border-gray-800 space-y-6">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white">{mode === 'create' ? 'Upload New Creation' : 'Edit Creation'}</h2>
                <p className="text-gray-400">{mode === 'create' ? 'Share your latest AI-generated work with the community.' : 'Make changes to your existing creation.'}</p>
            </div>
            <div className="pt-6 border-t border-gray-800 space-y-4">
                <div>
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-1" />
                </div>
                <div>
                    <Label htmlFor="prompt">Prompt / Description</Label>
                    <Textarea id="prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} className="mt-1" rows={4} />
                </div>
                <div>
                    <Label htmlFor="file">{mode === 'create' ? 'Content File' : 'Replace File (Optional)'}</Label>
                    <Input id="file" type="file" onChange={handleFileChange} required={mode === 'create'} className="mt-1" />
                    {initialData?.file_url && !file && (
                        <p className="text-xs text-gray-500 mt-2">Currently using: <a href={initialData.file_url} target="_blank" rel="noopener noreferrer" className="underline">existing file</a></p>
                    )}
                </div>
            </div>
            <div className="pt-4 border-t border-gray-800 flex justify-end">
                <Button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : (mode === 'create' ? 'Upload Creation' : 'Save Changes')}
                </Button>
            </div>
            {message && <p className="mt-2 text-center text-green-400">{message}</p>}
            {error && <p className="mt-2 text-center text-red-400">{error}</p>}
        </form>
    </div>
  );
}
