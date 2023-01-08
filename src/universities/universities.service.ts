import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { UniversityEntity } from './entities/university.entity';

@Injectable()
export class UniversitiesService {
  constructor(
    @InjectRepository(UniversityEntity)
    private readonly universityRepository: Repository<UniversityEntity>
  ) {}
  
  create(createUniversityDto: CreateUniversityDto) {
    return 'This action adds a new university';
  }

  findAll() {
    return `This action returns all universities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} university`;
  }

  update(id: number, updateUniversityDto: UpdateUniversityDto) {
    return `This action updates a #${id} university`;
  }

  remove(id: number) {
    return `This action removes a #${id} university`;
  }
}
