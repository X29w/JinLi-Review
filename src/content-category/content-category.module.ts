import { Module } from '@nestjs/common';
import { ContentCategoryService } from './content-category.service';
import { ContentCategoryController } from './content-category.controller';
import { ContentCategory } from './entities/content-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ContentCategory])],
  controllers: [ContentCategoryController],
  providers: [ContentCategoryService],
})
export class ContentCategoryModule {}
