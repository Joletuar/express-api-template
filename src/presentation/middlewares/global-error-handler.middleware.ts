import { Response, Request, NextFunction } from 'express';

import { CustomError } from '../../lib/errors';
import { HTTP_STATUS_CODES } from '../../lib/constants';
import { CustomResponse } from '../../lib/custom-response';

export const globalErrorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode, errorCode, errors;

  if (err instanceof CustomError) {
    statusCode = err.statusCode;
    errorCode = err.errorCode;
    errors = err.errors;
  } else {
    statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
    errorCode = '500';
    errors = 'INTERNAL_SERVER_ERROR';
  }

  console.error('[x] LOG: ', err); // <--- Logger

  return CustomResponse.sendErrorResponse(
    res,
    {
      errorCode,
      errors,
    },
    statusCode
  );
};
