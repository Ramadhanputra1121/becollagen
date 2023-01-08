import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageAttachmentService } from './message_attachment.service';
import { CreateMessageAttachmentDto } from './dto/create-message_attachment.dto';
import { UpdateMessageAttachmentDto } from './dto/update-message_attachment.dto';

@Controller('message-attachment')
export class MessageAttachmentController {
  constructor(private readonly messageAttachmentService: MessageAttachmentService) {}

  @Post()
  create(@Body() createMessageAttachmentDto: CreateMessageAttachmentDto) {
    return this.messageAttachmentService.create(createMessageAttachmentDto);
  }

  @Get()
  findAll() {
    return this.messageAttachmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageAttachmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageAttachmentDto: UpdateMessageAttachmentDto) {
    return this.messageAttachmentService.update(+id, updateMessageAttachmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageAttachmentService.remove(+id);
  }
}
