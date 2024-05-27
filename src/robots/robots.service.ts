import { Injectable } from '@nestjs/common';
import { CreateRobotDto } from './dto/create-robot.dto';
import { UpdateRobotDto } from './dto/update-robot.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Robot } from './entities/robot.entity';
import { Repository } from 'typeorm';
import { CustomException } from 'src/common/exceptions/custom.exception.filter';

@Injectable()
export class RobotsService {
  @InjectRepository(Robot)
  private readonly robotRepository: Repository<Robot>;

  //#region 创建robot
  async create(createRobotDto: CreateRobotDto) {
    const contents = await this.robotRepository.find();
    if (contents.length > 1) {
      throw new CustomException('REQUEST_URL_ERROR');
    }
    try {
      const newRobot = this.robotRepository.create(createRobotDto);
      await this.robotRepository.save(newRobot);
      return true;
    } catch (error) {}
  }
  //#endregion

  //#region 获取robot
  async findAll() {
    try {
      const robot = await this.robotRepository.find();
      return robot?.[0];
    } catch (error) {}
  }
  //#endregion

  //#region 更新robot
  async update(updateRobotDto: UpdateRobotDto) {
    try {
      const robot = await this.robotRepository.find();
      await this.robotRepository.update(robot?.[0].id, updateRobotDto);
      return true;
    } catch (error) {}
  }
  //#endregion
}
