import { Test, TestingModule } from '@nestjs/testing';
import { UserBiodataController } from './user_biodata.controller';
import { UserBiodataService } from './user_biodata.service';

describe('UserBiodataController', () => {
  let controller: UserBiodataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserBiodataController],
      providers: [UserBiodataService],
    }).compile();

    controller = module.get<UserBiodataController>(UserBiodataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
