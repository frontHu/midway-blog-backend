import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('article')
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  poster: string;

  @Column()
  abstract: string;

  @Column()
  text: string;
}
