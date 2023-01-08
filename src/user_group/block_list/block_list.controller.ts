import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BlockListService } from './block_list.service';
import { CreateBlockListDto } from './dto/create-block_list.dto';
import { UpdateBlockListDto } from './dto/update-block_list.dto';

@ApiTags('User')
@Controller('block-list')
export class BlockListController {
  constructor(private readonly blockListService: BlockListService) {}

  @Post()
  create(@Body() createBlockListDto: CreateBlockListDto) {
    return this.blockListService.create(createBlockListDto);
  }

  @Get()
  findAll() {
    return this.blockListService.findAll();
  }

  @Get(':user_id&:target_user_id')
  findOne(@Param('user_id') user_id: string, @Param('target_user_id') target_user_id: string) {
    return this.blockListService.findOne(+user_id, +target_user_id);
  }

  @Patch(':user_id&:target_user_id')
  update(@Param('user_id') user_id: string, @Param('target_user_id') target_user_id: string, @Body() updateBlockListDto: UpdateBlockListDto) {
    return this.blockListService.update(+user_id, +target_user_id, updateBlockListDto);
  }

  @Delete(':user_id&:target_user_id')
  remove(@Param('user_id') user_id: string, @Param('target_user_id') target_user_id: string) {
    return this.blockListService.remove(+user_id, +target_user_id);
  }
}
