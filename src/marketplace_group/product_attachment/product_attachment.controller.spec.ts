import { Test, TestingModule } from '@nestjs/testing';
import { ProductAttachmentController } from './product_attachment.controller';
import { ProductAttachmentService } from './product_attachment.service';

describe('ProductAttachmentController', () => {
  let controller: ProductAttachmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductAttachmentController],
      providers: [ProductAttachmentService],
    }).compile();

    controller = module.get<ProductAttachmentController>(ProductAttachmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
