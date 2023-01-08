import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupChatService } from './group_chat.service';
import { CreateGroupChatDto } from './dto/create-group_chat.dto';
import { UpdateGroupChatDto } from './dto/update-group_chat.dto';

@Controller('group-chat')
export class GroupChatController {
  constructor(private readonly groupChatService: GroupChatService) {}

  @Post()
  create(@Body() createGroupChatDto: CreateGroupChatDto) {
    return this.groupChatService.create(createGroupChatDto);
  }

  @Get()
  findAll() {
    return this.groupChatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupChatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupChatDto: UpdateGroupChatDto) {
    return this.groupChatService.update(+id, updateGroupChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupChatService.remove(+id);
  }
}
