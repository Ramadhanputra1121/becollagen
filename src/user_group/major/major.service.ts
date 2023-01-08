import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';
import { Major } from './entities/major.entity';

@Injectable()
export class MajorService {
  constructor(
    @InjectRepository(Major)
    private readonly majorRepository: Repository<Major>
  ) {}
  
  create(createMajorDto: CreateMajorDto): Promise<Major> {
    const newMajor = this.majorRepository.create(createMajorDto);
    
    return this.majorRepository.save(newMajor);
  }

  findAll(): Promise<Major[]> {
    return this.majorRepository.find();
  }

  findOne(id: number): Promise<Major> {
    return this.majorRepository.findOneBy({ id: id });
  }

  async update(id: number, updateMajorDto: UpdateMajorDto): Promise<Major> {
    const major = await this.findOne(id);
    
    return this.majorRepository.save({ ...major, ...updateMajorDto });
  }

  async remove(id: number): Promise<Major> {
    const major = await this.findOne(id);
    
    return this.majorRepository.remove(major);
  }
}
