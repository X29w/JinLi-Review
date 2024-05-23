import { IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  logo: string;

  @IsString()
  qrcode: string;

  @IsString()
  name: string;

  @IsString()
  domain: string;

  @IsString()
  phone: string;

  @IsString()
  email: string;

  @IsString()
  facebook: string;

  @IsString()
  twitter: string;

  @IsString()
  youtube: string;

  @IsString()
  linkedin: string;

  @IsString()
  pinterest: string;

  @IsString()
  skype: string;

  @IsString()
  snapchat: string;

  @IsString()
  instagram: string;

  @IsString()
  whatsapp: string;

  @IsString()
  wechat: string;

  @IsString()
  copyright: string;

  @IsString()
  record: string;

  @IsString()
  siteName: string;

  @IsString()
  siteIcon: string;

  @IsString()
  pem: string;

  @IsString()
  key: string;

  @IsString()
  address: string;
}
