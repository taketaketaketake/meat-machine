// src/lib/api/types.ts
// Shared types for API requests and responses

// Content type enum - must match backend validation
export type ContentType = 'video' | 'photo' | 'audio' | 'article'

// Creation status enum - must match backend validation
export type CreationStatus = 'draft' | 'published' | 'archived'

export interface User {
  id: string
  email: string
  username: string
  displayName?: string
  bio?: string
  avatarUrl?: string
  website?: string
  createdAt: string
  updatedAt: string
}

export interface PublicUser {
  id: string
  username: string
  displayName?: string
  bio?: string
  avatarUrl?: string
  website?: string
  createdAt: string
}

export interface Creation {
  id: string
  title: string
  description?: string
  contentType: ContentType
  status: CreationStatus
  fileUrl: string
  thumbnailUrl?: string
  tags?: string[]
  userId: string
  user?: PublicUser
  publishedAt?: string
  likesCount: number
  commentsCount: number
  createdAt: string
  updatedAt: string
}

export interface Comment {
  id: string
  body: string
  userId: string
  user?: PublicUser
  creationId: string
  parentId?: string
  createdAt: string
  updatedAt: string
}

export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface UploadConfig {
  maxFileSize: number
  allowedTypes: string[]
}

export interface UploadedFile {
  url: string
  contentType: string
  category: string
  size: number
}

export interface UploadResponse {
  message: string
  file: UploadedFile
}
