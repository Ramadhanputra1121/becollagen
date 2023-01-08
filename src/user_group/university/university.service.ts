import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { University } from './entities/university.entity';

@Injectable()
export class UniversityService {
  constructor(
    @InjectRepository(University)
    private readonly universityRepository: Repository<University>
  ) {}
  
  create(createUniversityDto: CreateUniversityDto): Promise<University> {
    const newUniversity = this.universityRepository.create(createUniversityDto);
    
    return this.universityRepository.save(newUniversity);
  }

  findAll(): Promise<University[]> {
    return this.universityRepository.find();
  }

  findOne(id: number): Promise<University> {
    return this.universityRepository.findOneBy({ id });
  }

  async update(id: number, updateUniversityDto: UpdateUniversityDto): Promise<University> {
    const university = await this.findOne(id);
    
    return this.universityRepository.save({ ...university, ...updateUniversityDto });
  }

  async remove(id: number): Promise<University> {
    const university = await this.findOne(id);
    
    return this.universityRepository.remove(university);
  }
}
