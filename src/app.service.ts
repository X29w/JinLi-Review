import { Injectable } from '@nestjs/common';
import { CustomException } from './common/exceptions/custom.exception.filter';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getError() {
    throw new CustomException('REQUEST_URL_ERROR');
  }
}
