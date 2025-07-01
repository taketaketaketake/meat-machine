// src/components/react/content/ContentSource.jsx
import React, { useState } from 'react';
import FileUpload from './FileUpload';
import AIGenerator from './AIGenerator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ContentSource({ onFileSelect }) {
  return (
    <Tabs defaultValue="upload" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="upload">Upload File</TabsTrigger>
        <TabsTrigger value="generate">Generate with AI</TabsTrigger>
      </TabsList>
      <TabsContent value="upload" className="pt-6">
        <FileUpload onFileSelect={onFileSelect} />
      </TabsContent>
      <TabsContent value="generate" className="pt-6">
        <AIGenerator />
      </TabsContent>
    </Tabs>
  );
}
