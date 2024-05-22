import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  findOne(id: number): Promise<Comment> {
    return this.commentRepository.findOne({ where: { commentId: id } });
  }

  create(comment: Comment): Promise<Comment> {
    return this.commentRepository.save(comment);
  }

  async update(id: number, comment: Comment): Promise<Comment> {
    await this.commentRepository.update(id, comment);
    return this.commentRepository.findOne({ where: { commentId: id } });
  }

  async remove(id: number): Promise<void> {
    await this.commentRepository.delete(id);
  }
}
