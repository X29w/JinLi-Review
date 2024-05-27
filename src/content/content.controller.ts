import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { generateParseIntPipe } from 'src/utils';
import { ContentCategoryType } from 'src/types';

@ApiTags('产品-文章')
@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @ApiOperation({ summary: '新增' })
  @Post()
  async create(@Body() createContentDto: CreateContentDto) {
    return await this.contentService.create(createContentDto);
  }

  @ApiOperation({ summary: '列表查询' })
  @Get()
  async findAll(
    @Query('current', new DefaultValuePipe(1), generateParseIntPipe('current'))
    current: number,
    @Query(
      'pageSize',
      new DefaultValuePipe(2),
      generateParseIntPipe('pageSize'),
    )
    pageSize: number,
    @Query('type') type: ContentCategoryType,
    @Query('pid') pid: number,
  ) {
    return await this.contentService.findAll(current, pageSize, type, pid);
  }

  @ApiOperation({ summary: '详情查询' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.contentService.findOne(+id);
  }

  @ApiOperation({ summary: '修改' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateContentDto: UpdateContentDto,
  ) {
    return await this.contentService.update(+id, updateContentDto);
  }

  @ApiOperation({ summary: '删除' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.contentService.remove(+id);
  }
}
