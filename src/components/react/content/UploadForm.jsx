// src/components/react/content/UploadForm.jsx
import React, { useState } from 'react';
import { api } from '@/lib/api/client';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

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

    try {
      const formData = new FormData();
      formData.append('file', file);

      await api.upload('/uploads', formData);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
    setUploading(false);
  };

  if (success) {
    return <p>File uploaded successfully!</p>;
  }

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
