import { Injectable } from '@nestjs/common';
import { CreateMessageAttachmentDto } from './dto/create-message_attachment.dto';
import { UpdateMessageAttachmentDto } from './dto/update-message_attachment.dto';

@Injectable()
export class MessageAttachmentService {
  create(createMessageAttachmentDto: CreateMessageAttachmentDto) {
    return 'This action adds a new messageAttachment';
  }

  findAll() {
    return `This action returns all messageAttachment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messageAttachment`;
  }

  update(id: number, updateMessageAttachmentDto: UpdateMessageAttachmentDto) {
    return `This action updates a #${id} messageAttachment`;
  }

  remove(id: number) {
    return `This action removes a #${id} messageAttachment`;
  }
}
