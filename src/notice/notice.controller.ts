import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('消息中心')
@Controller('notice')
export class NoticeController {}
