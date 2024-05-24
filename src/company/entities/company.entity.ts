import { Column, Entity } from 'typeorm';

@Entity({
  name: 'company',
})
export class Company {
  @Column()
  logo: string;

  @Column()
  qrcode: string;

  @Column()
  name: string;

  @Column()
  domain: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  facebook: string;

  @Column()
  twitter: string;

  @Column()
  youtube: string;

  @Column()
  linkedin: string;

  @Column()
  pinterest: string;

  @Column()
  skype: string;

  @Column()
  snapchat: string;

  @Column()
  instagram: string;

  @Column()
  whatsapp: string;

  @Column()
  wechat: string;

  @Column()
  copyright: string;

  @Column()
  record: string;

  @Column()
  siteName: string;

  @Column()
  siteIcon: string;

  @Column()
  pem: string;

  @Column()
  key: string;

  @Column()
  address: string;
}
