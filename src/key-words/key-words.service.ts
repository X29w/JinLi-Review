import { Injectable } from '@nestjs/common';
import { CreateKeyWordDto } from './dto/create-key-word.dto';
import { UpdateKeyWordDto } from './dto/update-key-word.dto';

@Injectable()
export class KeyWordsService {
  create(createKeyWordDto: CreateKeyWordDto) {
    return 'This action adds a new keyWord';
  }

  findAll() {
    return `This action returns all keyWords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} keyWord`;
  }

  update(id: number, updateKeyWordDto: UpdateKeyWordDto) {
    return `This action updates a #${id} keyWord`;
  }

  remove(id: number) {
    return `This action removes a #${id} keyWord`;
  }
}
