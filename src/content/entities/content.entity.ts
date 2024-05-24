import { ContentCategory } from 'src/content-category/entities/content-category.entity';
import { Keyword } from 'src/keywords/entities/keyword.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'content',
})
export class Content {
  @Column({
    comment: 'product是商品 article是文章',
  })
  type: 'product' | 'article';

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
  status: 'published' | 'draft' | 'scheduled';

  @Column({
    comment: '是否置顶',
  })
  isTop: boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => ContentCategory, (category) => category.content)
  @JoinTable({
    name: 'content_category',
  })
  categoryId: number;

  @ManyToMany(() => Keyword, (keyword) => keyword.contents)
  @JoinTable({
    name: 'keyword',
  })
  keywords: string[];
}
