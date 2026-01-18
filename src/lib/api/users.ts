// src/lib/api/users.ts
// User endpoints

import { api } from './client'
import type { PublicUser, User, Creation, PaginatedResponse } from './types'

export interface UpdateUserRequest {
  displayName?: string
  bio?: string
  avatarUrl?: string
  website?: string
}

export interface UserCreationsParams {
  page?: number
  limit?: number
}

export const usersApi = {
  // GET /api/users/:username
  async getProfile(username: string): Promise<PublicUser> {
    return api.get<PublicUser>(`/api/users/${encodeURIComponent(username)}`)
  },

  // PATCH /api/users/me
  async updateMe(data: UpdateUserRequest): Promise<User> {
    return api.patch<User>('/api/users/me', data)
  },

  // GET /api/users/:username/creations
  async getUserCreations(
    username: string,
    params: UserCreationsParams = {}
  ): Promise<PaginatedResponse<Creation>> {
    const searchParams = new URLSearchParams()
    if (params.page) searchParams.set('page', String(params.page))
    if (params.limit) searchParams.set('limit', String(params.limit))

    const query = searchParams.toString()
    const path = `/api/users/${encodeURIComponent(username)}/creations${query ? `?${query}` : ''}`
    return api.get<PaginatedResponse<Creation>>(path)
  },
}
