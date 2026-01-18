// src/lib/api/comments.ts
// Comment endpoints

import { api } from './client'
import type { Comment, PaginatedResponse } from './types'

export interface ListCommentsParams {
  page?: number
  limit?: number
}

export interface AddCommentRequest {
  body: string
  parentId?: string
}

export const commentsApi = {
  // GET /api/comments/creations/:id/comments
  async list(
    creationId: string,
    params: ListCommentsParams = {}
  ): Promise<PaginatedResponse<Comment>> {
    const searchParams = new URLSearchParams()
    if (params.page) searchParams.set('page', String(params.page))
    if (params.limit) searchParams.set('limit', String(params.limit))

    const query = searchParams.toString()
    const path = `/api/comments/creations/${encodeURIComponent(creationId)}/comments${query ? `?${query}` : ''}`
    return api.get<PaginatedResponse<Comment>>(path)
  },

  // POST /api/comments/creations/:id/comments
  async add(creationId: string, data: AddCommentRequest): Promise<Comment> {
    return api.post<Comment>(
      `/api/comments/creations/${encodeURIComponent(creationId)}/comments`,
      data
    )
  },

  // DELETE /api/comments/:commentId
  async delete(commentId: string): Promise<void> {
    await api.delete(`/api/comments/${encodeURIComponent(commentId)}`)
  },
}
