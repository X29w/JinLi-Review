import { Test, TestingModule } from '@nestjs/testing';
import { KeyWordsController } from './key-words.controller';
import { KeyWordsService } from './key-words.service';

describe('KeyWordsController', () => {
  let controller: KeyWordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeyWordsController],
      providers: [KeyWordsService],
    }).compile();

    controller = module.get<KeyWordsController>(KeyWordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
