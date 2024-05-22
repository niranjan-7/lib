import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Book } from '../book/book.entity';

@Entity()
export class Borrow {
  @PrimaryGeneratedColumn()
  borrowId: number;

  @Column()
  borrowDate: Date;

  @Column()
  returnDate: Date;

  @Column()
  duration: number;

  @ManyToOne(() => User, user => user.borrows)
  user: User;

  @ManyToOne(() => Book, book => book.borrows)
  book: Book;
}
