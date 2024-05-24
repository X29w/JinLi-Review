import { IsNotEmpty } from 'class-validator';

export class CreateRobotDto {
  @IsNotEmpty({
    message: '请输入内容',
  })
  content: string;
}
