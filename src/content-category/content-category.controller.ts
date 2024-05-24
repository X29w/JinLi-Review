import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContentCategoryService } from './content-category.service';
import { CreateContentCategoryDto } from './dto/create-content-category.dto';
import { UpdateContentCategoryDto } from './dto/update-content-category.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('产品-文章-分类')
@Controller('content-category')
export class ContentCategoryController {
  constructor(
    private readonly contentCategoryService: ContentCategoryService,
  ) {}

  @ApiOperation({ summary: '创建' })
  @Post()
  create(@Body() createContentCategoryDto: CreateContentCategoryDto) {
    return this.contentCategoryService.create(createContentCategoryDto);
  }

  @ApiOperation({ summary: '查询所有' })
  @Get()
  findAll() {
    return this.contentCategoryService.findAll();
  }

  @ApiOperation({ summary: '查询单个' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentCategoryService.findOne(+id);
  }

  @ApiOperation({ summary: '更新' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContentCategoryDto: UpdateContentCategoryDto,
  ) {
    return this.contentCategoryService.update(+id, updateContentCategoryDto);
  }

  @ApiOperation({ summary: '删除' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentCategoryService.remove(+id);
  }
}
