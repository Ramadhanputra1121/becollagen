import { Test, TestingModule } from '@nestjs/testing';
import { MessageAttachmentController } from './message_attachment.controller';
import { MessageAttachmentService } from './message_attachment.service';

describe('MessageAttachmentController', () => {
  let controller: MessageAttachmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageAttachmentController],
      providers: [MessageAttachmentService],
    }).compile();

    controller = module.get<MessageAttachmentController>(MessageAttachmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
