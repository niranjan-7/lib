import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Borrow } from './borrow.entity';

@Injectable()
export class BorrowService {
  constructor(
    @InjectRepository(Borrow)
    private borrowRepository: Repository<Borrow>,
  ) {}

  findAll(): Promise<Borrow[]> {
    return this.borrowRepository.find();
  }

  findOne(id: number): Promise<Borrow> {
    return this.borrowRepository.findOne({ where: { borrowId: id } });
  }

  create(borrow: Borrow): Promise<Borrow> {
    return this.borrowRepository.save(borrow);
  }

  async update(id: number, borrow: Borrow): Promise<Borrow> {
    await this.borrowRepository.update(id, borrow);
    return this.borrowRepository.findOne({ where: { borrowId: id } });
  }

  async remove(id: number): Promise<void> {
    await this.borrowRepository.delete(id);
  }
}
