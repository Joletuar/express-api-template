import { Response } from 'express';

import { HTTP_STATUS_CODES } from './constants';

interface CustomResponseOptions<T> {
  data: T;
}

interface CustomErrorResponseOptions {
  errors: any;
  errorCode: string;
}

export class CustomResponse {
  static sendResponse<T>(
    res: Response,
    options: CustomResponseOptions<T>,
    statusCode: number = HTTP_STATUS_CODES.OK
  ) {
    const { data } = options;

    return res.status(statusCode).json({
      data,
    });
  }

  static sendErrorResponse(
    res: Response,
    options: CustomErrorResponseOptions,
    statusCode: number = HTTP_STATUS_CODES.BAD_REQUEST
  ) {
    const { errors, errorCode } = options;

    return res.status(statusCode).json({
      errors,
      errorCode,
    });
  }
}
