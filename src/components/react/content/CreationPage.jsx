// src/components/react/content/CreationPage.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/supabase';
import ContentSource from './ContentSource';
import ContentDetailsForm from './ContentDetailsForm';
import FormActions from './FormActions';

export default function CreationPage({ mode = 'create', creationId = null }) {
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(mode === 'edit');
  const [error, setError] = useState('');

  // Fetch data if in edit mode
  useEffect(() => {
    if (mode === 'edit' && creationId) {
      const fetchCreation = async () => {
        const { data, error } = await supabase
          .from('creations')
          .select('*')
          .eq('id', creationId)
          .single();
        
        if (error) {
          setError('Could not fetch creation data.');
        } else if (data) {
          // Map database columns to form fields
          setFormData({
            title: data.title,
            description: data.prompt, // Assuming 'prompt' column is used for description
            toolsUsed: data.tool,
            // Add other fields as needed
          });
        }
        setIsLoading(false);
      };
      fetchCreation();
    }
  }, [mode, creationId]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const action = e.nativeEvent.submitter.value;
    console.log(`Submitting for action: ${action}`);
    console.log('Form Data:', formData);
    console.log('File:', file);

    // Placeholder for actual submission logic
    setTimeout(() => {
        alert(`Form submitted for action: "${action}"! Check the console for data.`);
        setIsLoading(false);
    }, 1500);
  };

  if (isLoading && mode === 'edit') {
    return <p className="text-center text-gray-400">Loading editor...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {mode === 'create' ? 'Share Your Creation' : 'Edit Your Creation'}
        </h1>
        <p className="text-lg text-gray-400 mt-2">
          {mode === 'create' ? 'Bring your AI-generated art to the community.' : 'Make changes and re-publish your work.'}
        </p>
      </header>

      <form onSubmit={handleFormSubmit} className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <ContentSource onFileSelect={setFile} />
        </div>
        <div className="lg:col-span-2">
          <ContentDetailsForm data={formData} onDataChange={setFormData} />
          <FormActions mode={mode} isLoading={isLoading} />
          {error && <p className="mt-4 text-red-400">{error}</p>}
        </div>
      </form>
    </div>
  );
}
