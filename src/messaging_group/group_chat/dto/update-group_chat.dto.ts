import { PartialType } from '@nestjs/swagger';
import { CreateGroupChatDto } from './create-group_chat.dto';

export class UpdateGroupChatDto extends PartialType(CreateGroupChatDto) {}
