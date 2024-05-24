import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const status = exception.getStatus();
    const message = Array.isArray(exception.getResponse()['message'])
      ? exception.getResponse()['message'].join(',')
      : exception.getResponse()['message'];

    response.status(status).json({
      code: status,
      success: false,
      message,
    });
  }
}
