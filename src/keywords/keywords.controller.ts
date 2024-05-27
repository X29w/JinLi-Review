import {
  Controller,
  Get,
  Post,
  Inject,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { KeywordsService } from './keywords.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('关键词')
@Controller('keywords')
export class KeywordsController {
  @Inject(KeywordsService)
  private readonly keywordsService: KeywordsService;

  @ApiOperation({ summary: '创建关键词' })
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file: Express.Multer.File) {
    return await this.keywordsService.create(file.buffer);
  }

  @ApiOperation({ summary: '关键词列表' })
  @Get()
  async findAll() {
    return await this.keywordsService.findAll();
  }
}
