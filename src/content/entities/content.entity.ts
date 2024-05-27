import { ContentCategory } from 'src/content-category/entities/content-category.entity';
import { Keyword } from 'src/keywords/entities/keyword.entity';
import { ContentCategoryType, ContentStatusType } from 'src/types';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'content',
})
export class Content {
  @Column({
    comment: 'product是商品 article是文章',
  })
  type: ContentCategoryType;

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: '标题',
  })
  name: string;

  @Column({
    comment: 'url',
  })
  url: string;

  @Column({
    comment: '状态：发布-草稿-定时发布',
  })
  status: ContentStatusType;

  @Column({
    comment: '是否置顶',
    default: false,
  })
  isTop: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => ContentCategory, (category) => category.content)
  @JoinTable({
    name: 'content_category',
  })
  categoryId: number;

  @ManyToMany(() => Keyword, (keyword) => keyword.contents)
  keywords: number[];
}
