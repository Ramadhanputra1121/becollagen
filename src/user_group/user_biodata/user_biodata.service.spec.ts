import { Test, TestingModule } from '@nestjs/testing';
import { UserBiodataService } from './user_biodata.service';

describe('UserBiodataService', () => {
  let service: UserBiodataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserBiodataService],
    }).compile();

    service = module.get<UserBiodataService>(UserBiodataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
