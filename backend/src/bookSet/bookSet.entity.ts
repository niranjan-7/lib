import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Book } from '../book/book.entity';

@Entity()
export class BookSet {
  @PrimaryGeneratedColumn()
  setId: number;

  @Column()
  setName: string;

  @OneToMany(() => Book, book => book.bookSet)
  books: Book[];
}
