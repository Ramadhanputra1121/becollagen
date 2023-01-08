import { PickType } from '@nestjs/swagger';
import { CreateFriendListDto } from './create-friend_list.dto';

export class UpdateFriendListDto extends PickType(CreateFriendListDto, ['is_friend'] as const) {}
