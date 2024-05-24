import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { RobotsService } from './robots.service';
import { CreateRobotDto } from './dto/create-robot.dto';
import { UpdateRobotDto } from './dto/update-robot.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('robots文件配置')
@Controller('robots')
export class RobotsController {
  constructor(private readonly robotsService: RobotsService) {}

  @ApiOperation({ summary: '创建' })
  @Post()
  create(@Body() createRobotDto: CreateRobotDto) {
    return this.robotsService.create(createRobotDto);
  }

  @ApiOperation({ summary: '查询详情' })
  @Get()
  findAll() {
    return this.robotsService.findAll();
  }

  @ApiOperation({ summary: '修改' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRobotDto: UpdateRobotDto) {
    return this.robotsService.update(+id, updateRobotDto);
  }
}
