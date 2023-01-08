import { Module } from '@nestjs/common';
import { FriendListService } from './friend_list.service';
import { FriendListController } from './friend_list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendList } from './entities/friend_list.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([FriendList]), UserModule],
  controllers: [FriendListController],
  providers: [FriendListService]
})
export class FriendListModule {}
