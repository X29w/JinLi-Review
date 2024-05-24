import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDoc } from './doc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  generateDoc(app);
  await app.listen(3000);
}
bootstrap();
