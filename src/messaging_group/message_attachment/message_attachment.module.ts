import { Module } from '@nestjs/common';
import { MessageAttachmentService } from './message_attachment.service';
import { MessageAttachmentController } from './message_attachment.controller';

@Module({
  controllers: [MessageAttachmentController],
  providers: [MessageAttachmentService]
})
export class MessageAttachmentModule {}
