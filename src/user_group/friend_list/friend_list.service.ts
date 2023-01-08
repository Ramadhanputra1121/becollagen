import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
// import { AddFriendDto } from './dto/add-friend.dto';
import { CreateFriendListDto } from './dto/create-friend_list.dto';
import { UpdateFriendListDto } from './dto/update-friend_list.dto';
import { FriendList } from './entities/friend_list.entity';

@Injectable()
export class FriendListService {
  constructor(
    @InjectRepository(FriendList)
    private readonly friendListRepository: Repository<FriendList>,
    private readonly userService: UserService
  ) {}
  
  async create(createFriendListDto: CreateFriendListDto): Promise<FriendList> {
    const existingFriendList = await this.findExisting(createFriendListDto.user_id, createFriendListDto.target_user_id);
    if (existingFriendList) {
      throw new ConflictException(`Friend List row with user_id '${createFriendListDto.user_id}' and '${createFriendListDto.target_user_id}' already exists.`);
    }
    
    const user = await this.userService.findOne(createFriendListDto.user_id);
    const targetUser = await this.userService.findOne(createFriendListDto.target_user_id);
    
    // const targetUsers: User[] = [];
    // for (let index = 0; index < createFriendListDto.target_user_ids.length; index++) {
    //   targetUsers.push(await this.userService.findOne(createFriendListDto.target_user_ids.at(index)));
    // }
    
    // const newFriendList = this.friendListRepository.create({
    //   user: {
    //     id: createFriendListDto.user_id
    //   },
    //   target_user: {
    //     id: createFriendListDto.target_user_id
    //   },
    //   ...createFriendListDto
    // });
    const newFriendList = this.friendListRepository.create({
      user: user,
      target_user: targetUser,
      ...createFriendListDto
    })
    // Alternative
    // const createFriendListEntity = new FriendList();
    // createFriendListEntity.user = user;
    // createFriendListEntity.target_user = targetUser;
    // createFriendListEntity.is_friend = createFriendListDto.is_friend;
    
    // const newFriendList = this.friendListRepository.create({
    //   ...createFriendListDto,
    //   user: user,
    //   target_users: targetUsers
    // })
    
    return this.friendListRepository.save(newFriendList);
    // return this.friendListRepository.save(createFriendListEntity);
  }
  
  findAll(): Promise<FriendList[]> {
    return this.friendListRepository.find({
      relations: {
        user: true,
        target_user: true,
      },
      select: {
        user: {
          id: true,
        },
        target_user: {
          id: true
        }
      }
    });
  }
  // findAll(): Promise<FriendList[]> {
  //   return this.friendListRepository.find({
  //     relations: {
  //       user: true,
  //       target_users: true,
  //     },
  //     select: {
  //       user: {
  //         id: true,
  //       },
  //       target_users: {
  //         id: true
  //       }
  //     }
  //   });
  // }

  async findOne(user_id: number, target_user_id: number): Promise<FriendList> {
    const friendList = await this.friendListRepository.findOne({
      relations: {
        user: true,
        target_user: true
      },
      where: {
        user: {
          id: user_id
        },
        target_user: {
          id: target_user_id
        }
      }
    });
    
    if (!friendList) {
      throw new NotFoundException(`Row with user_id '${user_id}' and table_user_id '${target_user_id}' does not exist.`);
    }
    
    return friendList;
  }
  // async findOne(user_id: number): Promise<FriendList> {
  //   const friendList = await this.friendListRepository.findOne({
  //     relations: {
  //       user: true,
  //       target_users: true
  //     },
  //     where: {
  //       user: {
  //         id: user_id
  //       }
  //     }
  //   });
    
  //   if (!friendList) {
  //     throw new NotFoundException(`Row with user_id '${user_id}' does not exist.`);
  //   }
    
  //   return friendList;
  // }
  
  async findExisting(user_id: number, target_user_id: number): Promise<FriendList> {
    const friendList = await this.friendListRepository.findOne({
      relations: {
        user: true,
        target_user: true
      },
      where: {
        user: {
          id: user_id
        },
        target_user: {
          id: target_user_id
        }
      }
    });
    
    return friendList;
  }

  async update(user_id: number, target_user_id: number, updateFriendListDto: UpdateFriendListDto): Promise<FriendList> {
    const friendList = await this.findOne(user_id, target_user_id);
    
    return this.friendListRepository.save({ ...friendList, ...updateFriendListDto });
  }
  // async addFriend(user_id: number, addFriendDto: AddFriendDto): Promise<FriendList> {
  //   const friendList = await this.findOne(user_id);
  //   const newFriend = await this.userService.findOne(addFriendDto.target_user_id);

  //   friendList.target_users.push(newFriend);
    
  //   return this.friendListRepository.save({ ...friendList });
  // }
  // async removeFriend(user_id: number, removeFriendDto: AddFriendDto): Promise<FriendList> {
  //   const friendList = await this.findOne(user_id);
  //   const newFriend = await this.userService.findOne(removeFriendDto.target_user_id);
    
  //   const newFriendList = friendList.target_users.filter(function(value) { return value !== newFriend })
    
  //   return this.friendListRepository.save({ ...friendList, target_users: newFriendList });
  // }
  
  async remove(user_id: number, target_user_id: number): Promise<FriendList> {
    const friendList = await this.findOne(user_id, target_user_id);
    
    return this.friendListRepository.remove(friendList);
  }
  // async remove(user_id: number): Promise<FriendList> {
  //   const friendList = await this.findOne(user_id);
    
  //   return this.friendListRepository.remove(friendList);
  // }
}
