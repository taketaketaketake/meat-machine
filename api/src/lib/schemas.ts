import { z } from "zod";

// UUID validation
export const uuidSchema = z.string().uuid();

// Pagination query params
export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export type PaginationQuery = z.infer<typeof paginationSchema>;

// Pagination helper - calculates skip and returns metadata
export function paginate(query: PaginationQuery, total: number) {
  const { page, limit } = query;
  const skip = (page - 1) * limit;
  const totalPages = Math.ceil(total / limit);

  return {
    skip,
    take: limit,
    meta: {
      page,
      limit,
      total,
      totalPages,
      hasMore: page < totalPages,
    },
  };
}

// Common response type for paginated results
export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}
