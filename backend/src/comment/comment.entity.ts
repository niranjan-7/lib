import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Book } from '../book/book.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  commentId: number;

  @Column()
  commentText: string;

  @Column()
  timestamp: Date;

  @ManyToOne(() => User, user => user.comments)
  user: User;

  @ManyToOne(() => Book, book => book.comments)
  book: Book;
}
