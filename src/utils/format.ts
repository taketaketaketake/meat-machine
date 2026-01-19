// src/utils/format.ts
// Formatting utility functions

/**
 * Format a number with locale-aware separators (e.g., 1000 -> "1,000")
 * @param num - Number to format
 * @returns Formatted string
 */
export function formatNumber(num: number): string {
  return num.toLocaleString()
}

/**
 * Format a number in compact notation (e.g., 1500 -> "1.5K", 1000000 -> "1M")
 * @param num - Number to format
 * @returns Compact formatted string
 */
export function formatCompact(num: number): string {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1).replace(/\.0$/, '')}K`
  }
  return String(num)
}

/**
 * Get a gradient from an array by index, cycling through if needed
 * @param index - Current index
 * @param gradients - Array of gradient strings
 * @returns Gradient string at cycled index
 */
export function getGradient(index: number, gradients: readonly string[]): string {
  return gradients[index % gradients.length]
}

/**
 * Create an array of numbers from 0 to length-1
 * Cleaner alternative to Array.from({ length }).map((_, i) => i)
 * @param length - Length of array to create
 * @returns Array of numbers
 */
export function range(length: number): number[] {
  return Array.from({ length }, (_, i) => i)
}
