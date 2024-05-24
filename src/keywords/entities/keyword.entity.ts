import { Content } from 'src/content/entities/content.entity';
import { PrimaryGeneratedColumn, Column, Entity, ManyToMany } from 'typeorm';

@Entity({
  name: 'keyword', // 表名
})
export class Keyword {
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

  @ManyToMany(() => Content, (content) => content.keywords)
  contents: Content[];
}
