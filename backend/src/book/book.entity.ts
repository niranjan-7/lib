import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { BookSet } from '../bookSet/bookSet.entity';
import { Comment } from '../comment/comment.entity';
import { Borrow } from '../borrow/borrow.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  bookId: number;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  pages: number;

  @ManyToOne(() => BookSet, bookSet => bookSet.books)
  bookSet: BookSet;

  @OneToMany(() => Comment, comment => comment.book)
  comments: Comment[];

  @OneToMany(() => Borrow, borrow => borrow.book)
  borrows: Borrow[];
}
