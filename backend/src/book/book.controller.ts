import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Post()
  create(@Body() book: Book): Promise<Book> {
    return this.bookService.create(book);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() book: Book): Promise<Book> {
    return this.bookService.update(id, book);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.bookService.remove(id);
  }
}
