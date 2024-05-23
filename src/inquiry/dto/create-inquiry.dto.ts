import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateInquiryDto {
  @IsNotEmpty({
    message: '请输入姓名',
  })
  name: string;

  @IsNotEmpty({
    message: '请输入邮箱',
  })
  @IsEmail({}, { message: '请输入有效的邮箱' })
  email: string;

  @IsNotEmpty({
    message: '请输入留言',
  })
  message: string;

  company?: string;

  phone?: string;
}
