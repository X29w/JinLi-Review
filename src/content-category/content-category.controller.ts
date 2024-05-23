import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContentCategoryService } from './content-category.service';
import { CreateContentCategoryDto } from './dto/create-content-category.dto';
import { UpdateContentCategoryDto } from './dto/update-content-category.dto';

@Controller('content-category')
export class ContentCategoryController {
  constructor(private readonly contentCategoryService: ContentCategoryService) {}

  @Post()
  create(@Body() createContentCategoryDto: CreateContentCategoryDto) {
    return this.contentCategoryService.create(createContentCategoryDto);
  }

  @Get()
  findAll() {
    return this.contentCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContentCategoryDto: UpdateContentCategoryDto) {
    return this.contentCategoryService.update(+id, updateContentCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentCategoryService.remove(+id);
  }
}
