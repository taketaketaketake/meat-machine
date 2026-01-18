// src/lib/api/creations.ts
// Creation endpoints

import { api } from './client'
import type { Creation, ContentType, PaginatedResponse } from './types'

export interface ListCreationsParams {
  page?: number
  limit?: number
  contentType?: ContentType
  sortBy?: 'recent' | 'popular'
}

export interface CreateCreationRequest {
  title: string
  contentType: ContentType
  fileUrl: string
  description?: string
  tags?: string[]
}

export interface UpdateCreationRequest {
  title?: string
  description?: string
  tags?: string[]
}

export const creationsApi = {
  // GET /api/creations
  async list(params: ListCreationsParams = {}): Promise<PaginatedResponse<Creation>> {
    const searchParams = new URLSearchParams()
    if (params.page) searchParams.set('page', String(params.page))
    if (params.limit) searchParams.set('limit', String(params.limit))
    if (params.contentType) searchParams.set('contentType', params.contentType)
    if (params.sortBy) searchParams.set('sortBy', params.sortBy)

    const query = searchParams.toString()
    return api.get<PaginatedResponse<Creation>>(`/api/creations${query ? `?${query}` : ''}`)
  },

  // POST /api/creations
  async create(data: CreateCreationRequest): Promise<Creation> {
    return api.post<Creation>('/api/creations', data)
  },

  // GET /api/creations/:id
  async get(id: string): Promise<Creation> {
    return api.get<Creation>(`/api/creations/${encodeURIComponent(id)}`)
  },

  // PATCH /api/creations/:id
  async update(id: string, data: UpdateCreationRequest): Promise<Creation> {
    return api.patch<Creation>(`/api/creations/${encodeURIComponent(id)}`, data)
  },

  // DELETE /api/creations/:id
  async delete(id: string): Promise<void> {
    await api.delete(`/api/creations/${encodeURIComponent(id)}`)
  },

  // POST /api/creations/:id/publish
  async publish(id: string): Promise<Creation> {
    return api.post<Creation>(`/api/creations/${encodeURIComponent(id)}/publish`)
  },

  // POST /api/creations/:id/like
  async like(id: string): Promise<void> {
    await api.post(`/api/creations/${encodeURIComponent(id)}/like`)
  },

  // DELETE /api/creations/:id/like
  async unlike(id: string): Promise<void> {
    await api.delete(`/api/creations/${encodeURIComponent(id)}/like`)
  },
}
