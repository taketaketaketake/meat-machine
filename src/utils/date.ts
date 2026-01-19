// src/utils/date.ts
// Date utility functions

/**
 * Check if a date is within the "new" threshold (default: 10 days)
 * @param dateStr - ISO date string or Date object
 * @param thresholdDays - Number of days to consider "new" (default: 10)
 * @returns boolean indicating if the date is recent
 */
export function isNew(dateStr: string | Date, thresholdDays = 10): boolean {
  const date = typeof dateStr === 'string' ? new Date(dateStr) : dateStr
  const now = new Date()
  const diffTime = now.getTime() - date.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays <= thresholdDays && diffDays >= 0
}

/**
 * Format a date as relative time (e.g., "2 days ago", "1 hour ago")
 * @param dateStr - ISO date string or Date object
 * @returns Formatted relative time string
 */
export function formatRelativeTime(dateStr: string | Date): string {
  const date = typeof dateStr === 'string' ? new Date(dateStr) : dateStr
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()

  const seconds = Math.floor(diffMs / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30)

  if (months > 0) return `${months}mo ago`
  if (weeks > 0) return `${weeks}w ago`
  if (days > 0) return `${days}d ago`
  if (hours > 0) return `${hours}h ago`
  if (minutes > 0) return `${minutes}m ago`
  return 'just now'
}
