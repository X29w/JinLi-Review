import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ContentCategoryService } from './content-category.service';
import { CreateContentCategoryDto } from './dto/create-content-category.dto';
import { UpdateContentCategoryDto } from './dto/update-content-category.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ContentCategoryType } from 'src/types';

@ApiTags('产品-文章-分类')
@Controller('content-category')
export class ContentCategoryController {
  constructor(
    private readonly contentCategoryService: ContentCategoryService,
  ) {}

  @ApiOperation({ summary: '创建' })
  @Post()
  async create(@Body() createContentCategoryDto: CreateContentCategoryDto) {
    return await this.contentCategoryService.create(createContentCategoryDto);
  }

  @ApiOperation({ summary: '查询所有' })
  @Get()
  async findAll(@Query('type') type: ContentCategoryType) {
    return await this.contentCategoryService.findAll(type);
  }

  @ApiOperation({ summary: '查询单个' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.contentCategoryService.findOne(+id);
  }

  @ApiOperation({ summary: '更新' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateContentCategoryDto: UpdateContentCategoryDto,
  ) {
    return await this.contentCategoryService.update(
      +id,
      updateContentCategoryDto,
    );
  }

  @ApiOperation({ summary: '删除' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.contentCategoryService.remove(+id);
  }
}
