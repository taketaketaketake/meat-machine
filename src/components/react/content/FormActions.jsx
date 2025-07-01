// src/components/react/content/FormActions.jsx
import React from 'react';
import { Button } from '@/components/ui/button';

export default function FormActions({ mode, isLoading }) {
  return (
    <div className="flex items-center gap-4 pt-4">
      <Button type="submit" name="action" value="publish" disabled={isLoading} className="w-full h-12">
        {isLoading ? 'Processing...' : (mode === 'create' ? 'Publish Creation' : 'Save Changes')}
      </Button>
      <Button type="submit" name="action" value="draft" variant="outline" disabled={isLoading} className="h-12 px-6">
        Save Draft
      </Button>
    </div>
  );
}
