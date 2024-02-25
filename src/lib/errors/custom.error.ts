import { HTTP_STATUS_CODES } from '../constants';

export class CustomError extends Error {
  constructor(
    public readonly statusCode: number = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
    public readonly errorCode: string = 'INTERNAL_SERVER_ERROR',
    public readonly errors: any = '505',
    public readonly stack?: any
  ) {
    super(`[x] ${errorCode}: ${stack ?? errors}`);
  }

  static badRequest(errorCode: string, errors?: any) {
    const errorMessages = 'BAD_REQUEST';
    return new CustomError(
      HTTP_STATUS_CODES.BAD_REQUEST,
      errorCode,
      errorMessages
    );
  }

  static unauthorized(errorCode: string, errors?: any) {
    const errorMessages = 'UNAUTHORIZED';
    return new CustomError(
      HTTP_STATUS_CODES.UNAUTHORIZED,
      errorCode,
      errorMessages
    );
  }

  static notFound(errorCode: string, errors?: any) {
    const errorMessages = 'NOT_FOUND';
    return new CustomError(
      HTTP_STATUS_CODES.NOT_FOUND,
      errorCode,
      errorMessages
    );
  }

  static forbidden(errorCode: string, errors?: any) {
    const errorMessages = 'FORBIDDEN';
    return new CustomError(
      HTTP_STATUS_CODES.FORBIDDEN,
      errorCode,
      errorMessages
    );
  }

  static internalServerError(stack: any) {
    return new CustomError(
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
      '505',
      'INTERNAL_SERVER_ERROR',
      stack
    );
  }
}
