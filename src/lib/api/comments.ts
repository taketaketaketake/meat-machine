// src/lib/api/comments.ts
// Comment endpoints

import { api } from './client'
import type { Comment, PaginatedResponse } from './types'

export interface ListCommentsParams {
  page?: number
  limit?: number
}

export interface AddCommentRequest {
  creationId: string
  body: string
  parentId?: string
}

export const commentsApi = {
  // GET /api/comments?creationId=:id
  async list(
    creationId: string,
    params: ListCommentsParams = {}
  ): Promise<PaginatedResponse<Comment>> {
    const searchParams = new URLSearchParams()
    searchParams.set('creationId', creationId)
    if (params.page) searchParams.set('page', String(params.page))
    if (params.limit) searchParams.set('limit', String(params.limit))

    return api.get<PaginatedResponse<Comment>>(`/api/comments?${searchParams.toString()}`)
  },

  // POST /api/comments
  async add(data: AddCommentRequest): Promise<Comment> {
    return api.post<Comment>('/api/comments', data)
  },

  // DELETE /api/comments/:commentId
  async delete(commentId: string): Promise<void> {
    await api.delete(`/api/comments/${encodeURIComponent(commentId)}`)
  },
}
