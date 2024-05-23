import { Content } from 'src/content/entities/content.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'content_category',
})
export class ContentCategory {
  @Column()
  type: 'product' | 'article';

  @Column()
  pid: number;

  @PrimaryGeneratedColumn()
  id: number;

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
