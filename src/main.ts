import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDoc } from './doc';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  generateDoc(app);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());

  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
