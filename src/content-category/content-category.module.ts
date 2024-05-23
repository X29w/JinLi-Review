import { Module } from '@nestjs/common';
import { ContentCategoryService } from './content-category.service';
import { ContentCategoryController } from './content-category.controller';

@Module({
  controllers: [ContentCategoryController],
  providers: [ContentCategoryService],
})
export class ContentCategoryModule {}
