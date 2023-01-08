import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FriendListService } from './friend_list.service';
import { CreateFriendListDto } from './dto/create-friend_list.dto';
import { UpdateFriendListDto } from './dto/update-friend_list.dto';
import { ApiTags } from '@nestjs/swagger';
import { FriendList } from './entities/friend_list.entity';
// import { AddFriendDto } from './dto/add-friend.dto';

@ApiTags('User')
@Controller('friend-list')
export class FriendListController {
  constructor(private readonly friendListService: FriendListService) {}

  @Post()
  create(@Body() createFriendListDto: CreateFriendListDto): Promise<FriendList> {
    return this.friendListService.create(createFriendListDto);
  }

  @Get()
  findAll(): Promise<FriendList[]> {
    return this.friendListService.findAll();
  }

  @Get(':user_id&:target_user_id')
  findOne(@Param('user_id') user_id: string, @Param('target_user_id') target_user_id: string): Promise<FriendList> {
    return this.friendListService.findOne(+user_id, +target_user_id);
  }
  // @Get(':user_id')
  // findOne(@Param('user_id') user_id: string) {
  //   return this.friendListService.findOne(+user_id);
  // }

  @Patch(':user_id&:target_user_id')
  update(@Param('user_id') user_id: string, @Param('target_user_id') target_user_id: string, @Body() updateFriendListDto: UpdateFriendListDto): Promise<FriendList> {
    return this.friendListService.update(+user_id, +target_user_id, updateFriendListDto);
  }
  // @Patch('add/:user_id')
  // addFriend(@Param('user_id') user_id: string, @Body() updateFriendListDto: AddFriendDto) {
  //   return this.friendListService.addFriend(+user_id, updateFriendListDto);
  // }
  // @Patch('remove/:user_id')
  // removeFriend(@Param('user_id') user_id: string, @Body() removeFriendDto: AddFriendDto) {
  //   return this.friendListService.removeFriend(+user_id, removeFriendDto);
  // }

  @Delete(':user_id&:target_user_id')
  remove(@Param('user_id') user_id: string, @Param('target_user_id') target_user_id: string): Promise<FriendList> {
    return this.friendListService.remove(+user_id, +target_user_id);
  }
  // @Delete(':user_id')
  // remove(@Param('user_id') user_id: string) {
  //   return this.friendListService.remove(+user_id);
  // }
}
