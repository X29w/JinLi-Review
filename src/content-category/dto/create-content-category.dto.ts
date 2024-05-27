import { IsNotEmpty } from 'class-validator';
import { ContentCategoryType } from 'src/types';

export class CreateContentCategoryDto {
  @IsNotEmpty({
    message: '分类名称不能为空',
  })
  name: string;

  @IsNotEmpty({
    message: '分类URL不能为空',
  })
  url: string;

  @IsNotEmpty({
    message: '请提供分类类别',
  })
  type: ContentCategoryType;

  pid?: number;
}
