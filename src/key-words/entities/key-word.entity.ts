import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class KeyWord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: '关键字',
  })
  name: string;

  @Column({
    comment: '关联页面数',
  })
  pageCount: number;

  @Column({
    comment: '年搜索量',
  })
  yearCount: number;

  @Column({
    comment: '创建时间',
  })
  createTime: Date;
}
