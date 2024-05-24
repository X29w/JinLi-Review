import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'robots',
})
export class Robot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;
}
