import { Controller, Get, Post, Body, Patch, Inject } from '@nestjs/common';
import { RobotsService } from './robots.service';
import { CreateRobotDto } from './dto/create-robot.dto';
import { UpdateRobotDto } from './dto/update-robot.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('robots文件配置')
@Controller('robots')
export class RobotsController {
  @Inject(RobotsService)
  private readonly robotsService: RobotsService;

  @ApiOperation({ summary: '创建' })
  @Post()
  async create(@Body() createRobotDto: CreateRobotDto) {
    return await this.robotsService.create(createRobotDto);
  }

  @ApiOperation({ summary: '查询详情' })
  @Get()
  async findAll() {
    return await this.robotsService.findAll();
  }

  @ApiOperation({ summary: '修改' })
  @Patch()
  async update(@Body() updateRobotDto: UpdateRobotDto) {
    return await this.robotsService.update(updateRobotDto);
  }
}
