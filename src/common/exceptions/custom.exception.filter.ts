import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCodeMap } from '../error';

export type TBusinessError = {
  //   code: number;
  message: keyof typeof ErrorCodeMap;
};

export class CustomException extends HttpException {
  constructor(errorCode: keyof typeof ErrorCodeMap) {
    super(
      {
        code: errorCode,
        message: ErrorCodeMap[errorCode],
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
