import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  DefaultValuePipe,
  Query,
} from '@nestjs/common';
import { InquiryService } from './inquiry.service';
import { CreateInquiryDto } from './dto/create-inquiry.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { generateParseIntPipe } from 'src/utils';

@ApiTags('询盘')
@Controller('inquiry')
export class InquiryController {
  constructor(private readonly inquiryService: InquiryService) {}

  @ApiOperation({ summary: '创建询盘' })
  @Post()
  async create(@Body() createInquiryDto: CreateInquiryDto) {
    return await this.inquiryService.create(createInquiryDto);
  }

  @ApiOperation({ summary: '查询询盘列表' })
  @Get()
  findAll(
    @Query('current', new DefaultValuePipe(1), generateParseIntPipe('current'))
    current: number,
    @Query(
      'pageSize',
      new DefaultValuePipe(2),
      generateParseIntPipe('pageSize'),
    )
    pageSize: number,
  ) {
    return this.inquiryService.findAll(current, pageSize);
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
