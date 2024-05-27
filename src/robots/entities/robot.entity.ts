import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'robots',
})
export class Robot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @CreateDateColumn({
    comment: '创建时间',
  })
  createdAt: Date;

  @UpdateDateColumn({
    comment: '更新时间',
  })
  updatedAt: Date;
}
