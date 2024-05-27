import { IsNotEmpty } from 'class-validator';
import { ContentCategoryType, ContentStatusType } from 'src/types';

export class CreateContentDto {
  @IsNotEmpty({
    message: '请提供类别',
  })
  type: ContentCategoryType;

  @IsNotEmpty({
    message: '请输入名称',
  })
  name: string;

  @IsNotEmpty({
    message: '请选择分类',
  })
  categoryId: number;

  @IsNotEmpty({
    message: '请输入链接',
  })
  url: string;

  @IsNotEmpty({
    message: '请选择状态',
  })
  status: ContentStatusType;

  keywords?: number[];
}
