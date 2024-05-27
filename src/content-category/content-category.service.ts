import { Injectable } from '@nestjs/common';
import { CreateContentCategoryDto } from './dto/create-content-category.dto';
import { UpdateContentCategoryDto } from './dto/update-content-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentCategory } from './entities/content-category.entity';
import { Repository } from 'typeorm';
import { ContentCategoryType } from 'src/types';

@Injectable()
export class ContentCategoryService {
  @InjectRepository(ContentCategory)
  private readonly contentCategoryRepository: Repository<ContentCategory>;

  //#region 创建分类
  async create(createContentCategoryDto: CreateContentCategoryDto) {
    try {
      await this.contentCategoryRepository.save(createContentCategoryDto);
      return true;
    } catch (error) {}
  }
  //#endregion

  //#region 获取分类列表
  async findAll(type: ContentCategoryType) {
    try {
      const contentCategorys = await this.contentCategoryRepository.findBy({
        type,
      });
      return contentCategorys;
    } catch (error) {}
  }
  //#endregion

  //#region 获取分类详情
  async findOne(id: number) {
    try {
      const contentCategory = await this.contentCategoryRepository.findOneBy({
        id,
      });
      return contentCategory;
    } catch (error) {}
  }
  //#endregion

  //#region 更新分类
  async update(id: number, updateContentCategoryDto: UpdateContentCategoryDto) {
    try {
      const contentCategory = await this.contentCategoryRepository.findOneBy({
        id,
      });
      if (!contentCategory) {
        return false;
      }
      await this.contentCategoryRepository.update(id, updateContentCategoryDto);

      return true;
    } catch (error) {}
  }
  //#endregion

  //#region 删除分类
  async remove(id: number) {
    try {
      await this.contentCategoryRepository.delete(id);
    } catch (error) {}
  }
  //#endregion
}
