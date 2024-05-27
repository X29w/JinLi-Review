import { IsEmail, IsIP, IsNotEmpty, IsPhoneNumber } from 'class-validator';

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

  @IsNotEmpty({
    message: '请提供站点语言',
  })
  language: string;

  @IsNotEmpty({
    message: '请提供ip',
  })
  @IsIP()
  ip: string;

  @IsNotEmpty({
    message: '请提供访问终端',
  })
  terminal: string;

  company?: string;

  @IsPhoneNumber('CN')
  phone?: string;
}
