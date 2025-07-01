// src/components/react/content/ContentDetailsForm.jsx
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContentDetailsForm({ data, onDataChange }) {
  const handleChange = (e) => {
    onDataChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-8">
      {/* Primary Info */}
      <div className="space-y-4">
        <div>
          <Label htmlFor="title" className="text-sm font-bold text-gray-300 mb-2 block">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            value={data.title || ''}
            onChange={handleChange}
            placeholder="e.g., Cybernetic Serenity"
            required
            className="h-11 px-4 bg-gray-900 border-gray-700 rounded-lg"
          />
        </div>
        <div>
          <Label htmlFor="description" className="text-sm font-bold text-gray-300 mb-2 block">Description</Label>
          <Textarea
            name="description"
            id="description"
            rows={4}
            value={data.description || ''}
            onChange={handleChange}
            className="px-4 py-3 bg-gray-900 border-gray-700 rounded-lg"
          />
        </div>
      </div>

      {/* Behind the Curtain */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white">Behind the Curtain</h3>
        <p className="text-sm text-gray-400 mb-6">Help the community learn by sharing your process.</p>
        <div className="space-y-4">
          <div>
            <Label htmlFor="toolsUsed" className="text-xs font-medium text-gray-400 mb-1 block">Model / Tool Used</Label>
            <Input
              type="text"
              name="toolsUsed"
              id="toolsUsed"
              value={data.toolsUsed || ''}
              onChange={handleChange}
              placeholder="e.g., Midjourney v6.0"
              className="h-10 px-3 bg-gray-800 border-gray-700 rounded-lg text-sm"
            />
          </div>
          <div>
            <Label htmlFor="promptDetails" className="text-xs font-medium text-gray-400 mb-1 block">Primary Prompt</Label>
            <Textarea
              name="promptDetails"
              id="prompt-details"
              rows={3}
              value={data.promptDetails || ''}
              onChange={handleChange}
              placeholder="The core prompt you used to generate the content."
              className="px-3 py-2 bg-gray-800 border-gray-700 rounded-lg text-sm"
            />
          </div>
          <div>
            <Label htmlFor="parameters" className="text-xs font-medium text-gray-400 mb-1 block">Parameters & Settings</Label>
            <Input
              type="text"
              name="parameters"
              id="parameters"
              value={data.parameters || ''}
              onChange={handleChange}
              placeholder="e.g., --ar 16:9 --style raw"
              className="h-10 px-3 bg-gray-800 border-gray-700 rounded-lg text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
