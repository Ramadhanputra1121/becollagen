import { Test, TestingModule } from '@nestjs/testing';
import { PostTagController } from './post_tag.controller';
import { PostTagService } from './post_tag.service';

describe('PostTagController', () => {
  let controller: PostTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostTagController],
      providers: [PostTagService],
    }).compile();

    controller = module.get<PostTagController>(PostTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
