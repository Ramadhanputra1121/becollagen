import { Test, TestingModule } from '@nestjs/testing';
import { PostAttachmentController } from './post_attachment.controller';
import { PostAttachmentService } from './post_attachment.service';

describe('PostAttachmentController', () => {
  let controller: PostAttachmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostAttachmentController],
      providers: [PostAttachmentService],
    }).compile();

    controller = module.get<PostAttachmentController>(PostAttachmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
