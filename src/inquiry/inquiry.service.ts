import { Injectable } from '@nestjs/common';
import { CreateInquiryDto } from './dto/create-inquiry.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Inquiry } from './entities/inquiry.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InquiryService {
  @InjectRepository(Inquiry)
  private readonly inquiryRepository: Repository<Inquiry>;

  //#region 创建询盘
  async create(createInquiryDto: CreateInquiryDto) {
    try {
      await this.inquiryRepository.save(createInquiryDto);
    } catch (error) {}
  }
  //#endregion

  //#region 询盘列表
  async findAll(current: number, pageSize: number) {
    const skipCount = (current - 1) * pageSize;
    const condition: Record<string, any> = {};
    const [inquirys, total] = await this.inquiryRepository.findAndCount({
      skip: skipCount,
      take: pageSize,
      where: condition,
    });
    return {
      inquirys,
      total,
    };
  }
  //#endregion

  //#region 询盘详情
  async findOne(id: number) {
    try {
      const foundInquiry = await this.inquiryRepository.findOneBy({ id });
      return foundInquiry;
    } catch (error) {}
  }
  //#endregion

  //#region 删除询盘
  async remove(id: number) {
    try {
      await this.inquiryRepository.delete(id);
      return true;
    } catch (error) {}
  }
  //#endregion
}
