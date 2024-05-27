import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from './entities/content.entity';
import { Repository } from 'typeorm';
import { ContentCategoryType } from 'src/types';

@Injectable()
export class ContentService {
  @InjectRepository(Content)
  private readonly contentRepository: Repository<Content>;

  //#region 创建产品/文章
  async create(createContentDto: CreateContentDto) {
    try {
      await this.contentRepository.save(createContentDto);
    } catch (error) {}
  }
  //#endregion

  //#region 获取产品/文章列表
  async findAll(
    current: number,
    pageSize: number,
    type: ContentCategoryType,
    pid: number,
  ) {
    const skipCount = (current - 1) * pageSize;
    const condition: Record<string, any> = {
      type,
      pid,
    };
    const [contents, total] = await this.contentRepository.findAndCount({
      skip: skipCount,
      take: pageSize,
      where: condition,
    });
    return {
      contents,
      total,
    };
  }
  //#endregion

  //#region 获取产品/文章详情
  async findOne(id: number) {
    try {
      const foundContent = await this.contentRepository.findOneBy({
        id,
      });
      return foundContent;
    } catch (error) {}
  }
  //#endregion

  //#region 更新产品/文章
  async update(id: number, updateContentDto: UpdateContentDto) {
    try {
      await this.contentRepository.update(id, updateContentDto);
    } catch (error) {}
  }
  //#endregion

  //#region 删除产品/文章
  async remove(id: number) {
    try {
      await this.contentRepository.delete(id);
    } catch (error) {}
  }
  //#endregion
}
