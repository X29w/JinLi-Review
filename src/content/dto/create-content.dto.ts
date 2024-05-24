import { IsNotEmpty, IsUrl } from 'class-validator';
import { TDKDto } from './tdk.dto';

export class CreateContentDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  categoryId: number;

  @IsNotEmpty()
  @IsUrl()
  url: string;

  @IsNotEmpty()
  status: 'published' | 'draft' | 'scheduled';

  keywords: string[];

  tdk: TDKDto;
}
