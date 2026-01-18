// src/lib/api/auth.ts
// Authentication endpoints

import { api, setCsrfToken, clearCsrfToken } from './client'
import type { User } from './types'

export interface RegisterRequest {
  email: string
  username: string
  password: string
  displayName?: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface AuthResponse {
  message: string
  user: User
  csrfToken: string
}

export const authApi = {
  // POST /api/auth/register (no CSRF required)
  async register(data: RegisterRequest): Promise<AuthResponse> {
    const result = await api.postPublic<AuthResponse>('/api/auth/register', data)
    // Store CSRF token from response
    setCsrfToken(result.csrfToken)
    return result
  },

  // POST /api/auth/login (no CSRF required)
  async login(data: LoginRequest): Promise<AuthResponse> {
    const result = await api.postPublic<AuthResponse>('/api/auth/login', data)
    // Store CSRF token from response
    setCsrfToken(result.csrfToken)
    return result
  },

  // POST /api/auth/logout
  async logout(): Promise<void> {
    await api.post('/api/auth/logout')
    // Clear CSRF token on logout
    clearCsrfToken()
  },

  // GET /api/auth/me
  async me(): Promise<User> {
    return api.get<User>('/api/auth/me')
  },
}
