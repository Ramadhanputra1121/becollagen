import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlockListDto } from './dto/create-block_list.dto';
import { UpdateBlockListDto } from './dto/update-block_list.dto';
import { BlockList } from './entities/block_list.entity';

@Injectable()
export class BlockListService {
  constructor(
    @InjectRepository(BlockList)
    private readonly blockListRepository: Repository<BlockList>
  ) {}
  
  create(createBlockListDto: CreateBlockListDto) {
    const newBlockList = this.blockListRepository.create(createBlockListDto);
    
    return this.blockListRepository.save(newBlockList);
  }

  findAll() {
    return this.blockListRepository.find();
  }

  findOne(user_id: number, target_user_id: number) {
    const blockList = this.blockListRepository.findOneBy({ user_id: user_id, target_user_id: target_user_id });
    
    if (!blockList) {
      throw new NotFoundException(`Row with user_id '${user_id}' and table_user_id '${target_user_id}' does not exist.`);
    }
    
    return blockList;
  }

  async update(user_id: number, target_user_id: number, updateBlockListDto: UpdateBlockListDto): Promise<BlockList> {
    const blockList = await this.findOne(user_id, target_user_id);
    
    if (!blockList) {
      throw new NotFoundException(`Row with user_id '${user_id}' and table_user_id '${target_user_id}' does not exist.`);
    }
    
    return this.blockListRepository.save({ ...blockList, ...updateBlockListDto });
  }

  async remove(user_id: number, target_user_id: number): Promise<BlockList> {
    const blockList = await this.findOne(user_id, target_user_id);
    
    if (!blockList) {
      throw new NotFoundException(`Row with user_id '${user_id}' and table_user_id '${target_user_id}' does not exist.`);
    }
    
    return this.blockListRepository.remove(blockList);
  }
}
