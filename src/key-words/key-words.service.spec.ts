import { Test, TestingModule } from '@nestjs/testing';
import { KeyWordsService } from './key-words.service';

describe('KeyWordsService', () => {
  let service: KeyWordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeyWordsService],
    }).compile();

    service = module.get<KeyWordsService>(KeyWordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
