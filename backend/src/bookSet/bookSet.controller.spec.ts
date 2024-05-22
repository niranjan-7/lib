import { Test, TestingModule } from '@nestjs/testing';
import { BookSetController } from './bookSet.controller';

describe('BookSetController', () => {
  let controller: BookSetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookSetController],
    }).compile();

    controller = module.get<BookSetController>(BookSetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
