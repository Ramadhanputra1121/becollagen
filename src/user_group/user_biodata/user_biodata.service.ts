import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserBiodataDto } from './dto/create-user_biodata.dto';
import { UpdateUserBiodataDto } from './dto/update-user_biodata.dto';
import { UserBiodata } from './entities/user_biodata.entity';

@Injectable()
export class UserBiodataService {
  constructor(
    @InjectRepository(UserBiodata)
    private readonly userBiodataRepository: Repository<UserBiodata>
  ) {}
  
  // create(createUserBiodataDto: CreateUserBiodataDto): Promise<UserBiodata> {
  //   const newUserBio = this.userBiodataRepository.create(createUserBiodataDto);
    
  //   return this.userBiodataRepository.save(newUserBio);
  // }
  
  findAll(): Promise<UserBiodata[]> {
    return this.userBiodataRepository.find({
      relations: {
        user: true,
        university: true,
        major: true
      },
      select: {
        user: {
          id: true
        },
        university: {
          id: true
        },
        major: {
          id: true
        }
      }
    });
  }
  
  findOne(id: number): Promise<UserBiodata> {
    return this.userBiodataRepository.findOne({
      relations: {
        user: true,
        university: true,
        major: true
      },
      where: {
        user: {
          id: id
        }
      }
    }
    );
  }

  async update(id: number, updateUserBiodataDto: UpdateUserBiodataDto): Promise<UserBiodata> {
    const userBiodata = await this.findOne(id);
    
    return this.userBiodataRepository.save({ ...userBiodata, ...updateUserBiodataDto });
  }

  async remove(id: number): Promise<UserBiodata> {
    const userBiodata = await this.findOne(id);
    
    return this.userBiodataRepository.remove(userBiodata);
  }
}
