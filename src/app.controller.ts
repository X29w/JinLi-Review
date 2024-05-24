import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('检验接口状态')
@Controller()
export class AppController {
  @Inject(AppService)
  private readonly appService: AppService;

  @ApiOperation({ summary: '检验接口状态' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
