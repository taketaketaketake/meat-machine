// src/lib/api/index.ts
// Unified API exports

// Core client and utilities
export { api, ApiError, fetchCsrfToken, getCsrfToken, setCsrfToken, clearCsrfToken } from './client'

// Typed endpoint modules
export { authApi } from './auth'
export { usersApi } from './users'
export { creationsApi } from './creations'
export { commentsApi } from './comments'
export { uploadsApi } from './uploads'

// Types
export type {
  ContentType,
  CreationStatus,
  User,
  PublicUser,
  Creation,
  Comment,
  PaginatedResponse,
  UploadConfig,
  UploadedFile,
  UploadResponse,
} from './types'

// Request types
export type { RegisterRequest, LoginRequest, AuthResponse } from './auth'
export type { UpdateUserRequest, UserCreationsParams } from './users'
export type {
  ListCreationsParams,
  CreateCreationRequest,
  UpdateCreationRequest,
} from './creations'
export type { ListCommentsParams, AddCommentRequest } from './comments'
