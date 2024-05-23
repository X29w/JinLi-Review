import { Module } from '@nestjs/common';
import { KeyWordsService } from './key-words.service';
import { KeyWordsController } from './key-words.controller';

@Module({
  controllers: [KeyWordsController],
  providers: [KeyWordsService],
})
export class KeyWordsModule {}
