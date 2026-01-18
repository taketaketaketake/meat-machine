// src/lib/api/uploads.ts
// Upload endpoints

import { api } from './client'
import type { UploadConfig, UploadResponse } from './types'

export const uploadsApi = {
  // POST /api/upload
  async upload(file: File): Promise<UploadResponse> {
    const formData = new FormData()
    formData.append('file', file)
    return api.upload<UploadResponse>('/api/upload', formData)
  },

  // GET /api/upload/config
  async getConfig(): Promise<UploadConfig> {
    return api.get<UploadConfig>('/api/upload/config')
  },
}
