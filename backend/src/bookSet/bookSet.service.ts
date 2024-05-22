import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookSet } from './bookSet.entity';

@Injectable()
export class BookSetService {
  constructor(
    @InjectRepository(BookSet)
    private bookSetRepository: Repository<BookSet>,
  ) {}

  findAll(): Promise<BookSet[]> {
    return this.bookSetRepository.find();
  }

  findOne(id: number): Promise<BookSet> {
    return this.bookSetRepository.findOne({ where: { setId: id } });
  }

  create(bookSet: BookSet): Promise<BookSet> {
    return this.bookSetRepository.save(bookSet);
  }

  async update(id: number, bookSet: BookSet): Promise<BookSet> {
    await this.bookSetRepository.update(id, bookSet);
    return this.bookSetRepository.findOne({ where: { setId: id } });
  }

  async remove(id: number): Promise<void> {
    await this.bookSetRepository.delete(id);
  }
}
