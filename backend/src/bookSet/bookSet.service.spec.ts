import { Test, TestingModule } from '@nestjs/testing';
import { BookSetService } from './bookSet.service';

describe('BookSetService', () => {
  let service: BookSetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookSetService],
    }).compile();

    service = module.get<BookSetService>(BookSetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
