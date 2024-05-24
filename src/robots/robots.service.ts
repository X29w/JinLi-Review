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
  private readonly robotRepository: Repository<Robot>; // 注入Robot实体类的Repository

  async create(createRobotDto: CreateRobotDto) {
    try {
      const contents = await this.robotRepository.find();
      if (contents.length > 1) {
        throw new CustomException('REQUEST_URL_ERROR');
      }
      const newRobot = this.robotRepository.create(createRobotDto);
      await this.robotRepository.save(newRobot);
      return true;
    } catch (error) {
      return false;
    }
  }

  findAll() {
    return `This action returns all robots`;
  }

  update(id: number, updateRobotDto: UpdateRobotDto) {
    return `This action updates a #${id} robot`;
  }
}
