import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BookSetService } from './bookSet.service';
import { BookSet } from './bookSet.entity';

@Controller('bookSets')
export class BookSetController {
  constructor(private readonly bookSetService: BookSetService) {}

  @Get()
  findAll(): Promise<BookSet[]> {
    return this.bookSetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<BookSet> {
    return this.bookSetService.findOne(id);
  }

  @Post()
  create(@Body() bookSet: BookSet): Promise<BookSet> {
    return this.bookSetService.create(bookSet);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() bookSet: BookSet): Promise<BookSet> {
    return this.bookSetService.update(id, bookSet);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.bookSetService.remove(id);
  }
}
