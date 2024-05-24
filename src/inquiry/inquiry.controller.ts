import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { InquiryService } from './inquiry.service';
import { CreateInquiryDto } from './dto/create-inquiry.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('询盘')
@Controller('inquiry')
export class InquiryController {
  constructor(private readonly inquiryService: InquiryService) {}

  @ApiOperation({ summary: '创建询盘' })
  @Post()
  create(@Body() createInquiryDto: CreateInquiryDto) {
    return this.inquiryService.create(createInquiryDto);
  }

  @ApiOperation({ summary: '查询询盘列表' })
  @Get()
  findAll() {
    return this.inquiryService.findAll();
  }

  @ApiOperation({ summary: '查询询盘' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inquiryService.findOne(+id);
  }

  @ApiOperation({ summary: '删除询盘' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inquiryService.remove(+id);
  }
}
