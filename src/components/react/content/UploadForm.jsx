import React, { useState } from 'react';
import { supabase } from '@/lib/supabase/supabase';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    setUploading(true);
    setError(null);

    const { data, error } = await supabase.storage
      .from('user-uploads')
      .upload(`public/${file.name}`, file);

    if (error) {
      setError(error.message);
    } else {
      console.log('File uploaded successfully:', data);
      // Handle successful upload (e.g., save the URL to the database)
    }
    setUploading(false);
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit" disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}