import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Inquiry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  origin: string;

  @Column()
  terminal: string;

  @Column()
  country: string;

  @Column()
  language: string;

  @Column()
  email: string;

  @Column()
  sendTime: Date;
}
