import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserBiodata } from '../user_biodata/entities/user_biodata.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserBiodata)
    private readonly userBiodataRepository: Repository<UserBiodata>
  ) {}
    
  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    const createUserBiodata = new UserBiodata();
    
    const existingUser = await this.findOneByEmail(newUser.email);
    if (existingUser) {
      throw new ConflictException(`User with email '${existingUser.email}' already exists.`);
    }
    
    newUser.name = createUserDto.username;
    // TO DO: Encrypt Password
    
    await this.userRepository.save(newUser);
    // const { password, ...result } = newUser;
    createUserBiodata.id = newUser.id;
    createUserBiodata.user = newUser;
    const newUserBiodata = this.userBiodataRepository.create(createUserBiodata);
    await this.userBiodataRepository.save(newUserBiodata);
    
    return newUser;
    // Alternative, but return type is not the object passed.
    // return this.userRepository.insert(newUser);
  }
  
  findAll() {
    // SQL Script equivalent:
    // "SELECT * FROM `user`"
    return this.userRepository.find();
  }
  
  async findExisting(id: number): Promise<User> {
    // SQL Script equivalent:
    // "SELECT * FROM `user` WHERE `id`=:id LIMIT 1"
    const user = await this.userRepository.findOne({
      relations: {
        user_biodata: true,
        friend_list: true
      },
      where: {
        id: id
      },
      select: {
        friend_list: {
          id: true
        }
      }
    });
    
    return user;
  }
  async findOne(id: number): Promise<User> {
    // SQL Script equivalent:
    // "SELECT * FROM `user` WHERE `id`=:id LIMIT 1"
    const user = await this.findExisting(id);
    
    if (!user) {
      throw new NotFoundException(`User with id '${id}' does not exist.`);
    }
    
    return user;
  }
  findOneByEmail(email: string): Promise<User> {
    const user = this.userRepository.findOneBy({ email: email });
    return user;
  }
  
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    
    if (!user) {
      throw new NotFoundException(`User with id '${id}' does not exist.`);
    }
    
    return this.userRepository.save({ ...user, ...updateUserDto });
    // Alternative, but return type is not the object passed.
    // return this.userRepository.update(id, updateUserDto);
  }
  
  async remove(id: number): Promise<User> {
    const user = await this.findOne(id);
    
    if (!user) {
      throw new NotFoundException(`User with id '${id}' does not exist.`);
    }
    
    return this.userRepository.remove(user);
    // Alternative, but return type is not the object passed.
    // return this.userRepository.delete(id);
  }
}
