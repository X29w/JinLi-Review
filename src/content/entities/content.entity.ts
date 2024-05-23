import { ContentCategory } from 'src/content-category/entities/content-category.entity';
import {
  Column,
  Entity,
  JoinTable,
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

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  status: boolean;

  @ManyToOne(() => ContentCategory, (category) => category.content)
  @JoinTable({
    name: 'content_category',
  })
  categoryId: ContentCategory;
}
