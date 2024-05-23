import { Test, TestingModule } from '@nestjs/testing';
import { ContentCategoryController } from './content-category.controller';
import { ContentCategoryService } from './content-category.service';

describe('ContentCategoryController', () => {
  let controller: ContentCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentCategoryController],
      providers: [ContentCategoryService],
    }).compile();

    controller = module.get<ContentCategoryController>(ContentCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
