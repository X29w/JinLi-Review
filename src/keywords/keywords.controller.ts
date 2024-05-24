import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { KeywordsService } from './keywords.service';
import { CreateKeywordDto } from './dto/create-keyword.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('关键词')
@Controller('keywords')
export class KeywordsController {
  constructor(private readonly keywordsService: KeywordsService) {}

  @ApiOperation({ summary: '创建关键词' })
  @Post()
  create(@Body() createKeywordDto: CreateKeywordDto) {
    return this.keywordsService.create(createKeywordDto);
  }

  @ApiOperation({ summary: '关键词列表' })
  @Get()
  findAll() {
    return this.keywordsService.findAll();
  }

  @ApiOperation({ summary: '删除关键词' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.keywordsService.remove(+id);
  }
}
