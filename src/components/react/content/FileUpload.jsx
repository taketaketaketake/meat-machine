// src/components/react/content/FileUpload.jsx
import React, { useCallback, useState } from 'react';

// Define the accepted file types for easy management
const ACCEPTED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'video/mp4',
  'audio/mpeg', // for .mp3
  'audio/wav',
];

export default function FileUpload({ onFileSelect }) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (file) => {
    setError(''); // Reset error on new file selection
    if (file) {
      // Validation check for file type
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        setError('Invalid file type. Please upload an image, video, or audio file.');
        return;
      }
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    
    // Check if multiple files were dropped
    if (e.dataTransfer.files && e.dataTransfer.files.length > 1) {
      setError('Please upload only one file at a time.');
      return;
    }

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  }, []);

  const handleRemoveFile = () => {
    setSelectedFile(null);
    onFileSelect(null);
    setError('');
  };

  if (selectedFile) {
    return (
      <div className="relative w-full rounded-lg border-2 border-gray-700 p-6 text-center bg-gray-900">
        <p className="font-semibold text-white">File Selected:</p>
        <p className="text-sm text-pink-400 mt-1 truncate">{selectedFile.name}</p>
        <button type="button" onClick={handleRemoveFile} className="mt-4 text-xs font-semibold text-gray-400 hover:text-white">
          Remove file
        </button>
      </div>
    );
  }

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative block w-full rounded-lg border-2 border-dashed p-12 text-center transition-colors ${
          isDragging ? 'border-pink-500 bg-pink-500/10' : 'border-gray-700 hover:border-gray-500'
        }`}
      >
        <input
          type="file"
          id="file-input"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={(e) => handleFileChange(e.target.files[0])}
          accept={ACCEPTED_FILE_TYPES.join(',')}
        />
        <svg className="mx-auto h-12 w-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>
        <label htmlFor="file-input" className="mt-4 block text-sm font-semibold text-white cursor-pointer">
          Drag & drop your file here
        </label>
        <span className="mt-1 block text-xs text-gray-400">or</span>
        <label htmlFor="file-input" className="mt-2 text-sm font-semibold text-pink-500 hover:text-pink-400 cursor-pointer">
          browse files
        </label>
        <p className="mt-4 text-xs text-gray-500">Supports: JPG, PNG, MP4, MP3, WAV</p>
      </div>
      {error && <p className="mt-2 text-sm text-red-400 text-center">{error}</p>}
    </div>
  );
}
