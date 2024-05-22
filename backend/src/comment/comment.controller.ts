import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  findAll(): Promise<Comment[]> {
    return this.commentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Comment> {
    return this.commentService.findOne(id);
  }

  @Post()
  create(@Body() comment: Comment): Promise<Comment> {
    return this.commentService.create(comment);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() comment: Comment): Promise<Comment> {
    return this.commentService.update(id, comment);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.commentService.remove(id);
  }
}
