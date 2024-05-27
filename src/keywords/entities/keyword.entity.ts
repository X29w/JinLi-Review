import { Content } from 'src/content/entities/content.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'keyword', // 表名
})
export class Keyword {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: '关键字',
  })
  keyword: string;

  @Column({
    comment: '关联页面数',
    default: 0,
  })
  pageCount: number;

  @Column({
    comment: '年搜索量',
    default: 0,
  })
  yearCount: string;

  @CreateDateColumn({
    comment: '创建时间',
  })
  createdAt: Date;

  @UpdateDateColumn({
    comment: '更新时间',
  })
  updatedAt: Date;

  @ManyToMany(() => Content, (content) => content.keywords)
  contents: Content[];
}
