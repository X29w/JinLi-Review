import { Content } from 'src/content/entities/content.entity';
import { ContentCategoryType } from 'src/types';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'content_category',
})
export class ContentCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({
    default: 0,
  })
  pid: number;

  @Column({
    comment: 'product是产品，article是文章',
  })
  type: ContentCategoryType;

  @Column()
  name: string;

  @Column()
  url: string;

  @OneToMany(() => Content, (content) => content.categoryId)
  @JoinTable({
    name: 'content',
  })
  content: Content[];
}
