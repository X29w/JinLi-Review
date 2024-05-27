import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'inquiry',
})
export class Inquiry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  terminal: string;

  @Column()
  language: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  message: string;

  @Column()
  ip: string;

  @Column()
  company: string;

  @Column()
  phone: string;

  @CreateDateColumn({
    comment: '创建日期',
  })
  createdAt: Date;

  @UpdateDateColumn({
    comment: '更新日期',
  })
  updatedAt: Date;
}
