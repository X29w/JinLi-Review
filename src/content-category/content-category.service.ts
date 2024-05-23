import { Injectable } from '@nestjs/common';
import { CreateContentCategoryDto } from './dto/create-content-category.dto';
import { UpdateContentCategoryDto } from './dto/update-content-category.dto';

@Injectable()
export class ContentCategoryService {
  create(createContentCategoryDto: CreateContentCategoryDto) {
    return 'This action adds a new contentCategory';
  }

  findAll() {
    return `This action returns all contentCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contentCategory`;
  }

  update(id: number, updateContentCategoryDto: UpdateContentCategoryDto) {
    return `This action updates a #${id} contentCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} contentCategory`;
  }
}
