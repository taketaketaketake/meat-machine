// src/components/react/content/AIGenerator.jsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function AIGenerator() {
  // In a real app, this would trigger a generation process.
  const handleGenerate = () => {
    alert("AI Generation feature coming soon!");
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="ai-model">Select AI Model</Label>
        <Select>
            <SelectTrigger id="ai-model" className="w-full mt-1">
                <SelectValue placeholder="Choose a model..." />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="midjourney">Midjourney</SelectItem>
                <SelectItem value="sora">Sora</SelectItem>
                <SelectItem value="suno">Suno</SelectItem>
                <SelectItem value="elevenlabs">ElevenLabs</SelectItem>
            </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="generate-prompt">Prompt</Label>
        <Textarea
          id="generate-prompt"
          rows={6}
          className="mt-1"
          placeholder="A futuristic cityscape at dusk, synthwave style..."
        />
      </div>
      <Button type="button" onClick={handleGenerate} className="w-full">
        Generate
      </Button>
    </div>
  );
}
