import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Keyword } from './entities/keyword.entity';
import { Repository } from 'typeorm';
import * as ExcelJS from 'exceljs';

@Injectable()
export class KeywordsService {
  @InjectRepository(Keyword)
  private readonly keywordRepository: Repository<Keyword>;

  //#region 导入创建关键词
  async create(buffer: Buffer) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer);
    const worksheet = workbook.getWorksheet(1);
    const dataToSave = [];
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber > 1) {
        const data = new Keyword();
        data.keyword = row.getCell(1).value.toString();
        data.yearCount = row.getCell(2).value.toString();
        dataToSave.push(data);
      }
    });
    await this.keywordRepository.save(dataToSave);
  }
  //#endregion

  //#region 关键词列表
  async findAll() {
    try {
      const keyword = await this.keywordRepository.find();
      return keyword;
    } catch (error) {}
  }
  //#endregion
}
