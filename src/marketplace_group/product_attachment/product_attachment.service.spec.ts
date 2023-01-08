import { Test, TestingModule } from '@nestjs/testing';
import { ProductAttachmentService } from './product_attachment.service';

describe('ProductAttachmentService', () => {
  let service: ProductAttachmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductAttachmentService],
    }).compile();

    service = module.get<ProductAttachmentService>(ProductAttachmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
