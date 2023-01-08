import { Module } from '@nestjs/common';
import { ProductAttachmentService } from './product_attachment.service';
import { ProductAttachmentController } from './product_attachment.controller';

@Module({
  controllers: [ProductAttachmentController],
  providers: [ProductAttachmentService]
})
export class ProductAttachmentModule {}
