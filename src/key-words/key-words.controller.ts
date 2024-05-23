import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { KeyWordsService } from './key-words.service';
import { CreateKeyWordDto } from './dto/create-key-word.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('关键词')
@Controller('key-words')
export class KeyWordsController {
  constructor(private readonly keyWordsService: KeyWordsService) {}

  @ApiOperation({ summary: '创建关键词' })
  @Post()
  create(@Body() createKeyWordDto: CreateKeyWordDto) {
    return this.keyWordsService.create(createKeyWordDto);
  }

  @ApiOperation({ summary: '关键词列表' })
  @Get()
  findAll() {
    return this.keyWordsService.findAll();
  }

  @ApiOperation({ summary: '删除关键词' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.keyWordsService.remove(+id);
  }
}
