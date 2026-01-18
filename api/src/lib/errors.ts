import type { FastifyError, FastifyReply, FastifyRequest } from "fastify";

export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);
    this.name = "AppError";
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(404, message);
    this.name = "NotFoundError";
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") {
    super(401, message);
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError extends AppError {
  constructor(message = "Forbidden") {
    super(403, message);
    this.name = "ForbiddenError";
  }
}

export class ConflictError extends AppError {
  constructor(message = "Resource already exists") {
    super(409, message);
    this.name = "ConflictError";
  }
}

export class ValidationError extends AppError {
  constructor(message = "Validation failed") {
    super(400, message);
    this.name = "ValidationError";
  }
}

export function errorHandler(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) {
  request.log.error(error);

  // Handle AppError instances
  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      error: error.name,
      message: error.message,
      statusCode: error.statusCode,
    });
  }

  // Handle Zod validation errors
  if (error.name === "ZodError") {
    return reply.status(400).send({
      error: "ValidationError",
      message: "Validation failed",
      statusCode: 400,
      details: JSON.parse(error.message),
    });
  }

  // Handle Prisma errors
  if (error.name === "PrismaClientKnownRequestError") {
    const prismaError = error as FastifyError & { code?: string };
    if (prismaError.code === "P2002") {
      return reply.status(409).send({
        error: "ConflictError",
        message: "Resource already exists",
        statusCode: 409,
      });
    }
    if (prismaError.code === "P2025") {
      return reply.status(404).send({
        error: "NotFoundError",
        message: "Resource not found",
        statusCode: 404,
      });
    }
  }

  // Default error response
  const statusCode = error.statusCode ?? 500;
  return reply.status(statusCode).send({
    error: "InternalServerError",
    message:
      process.env.NODE_ENV === "production"
        ? "An unexpected error occurred"
        : error.message,
    statusCode,
  });
}
