import { Module } from '@nestjs/common';
import { BlockListService } from './block_list.service';
import { BlockListController } from './block_list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockList } from './entities/block_list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlockList])],
  controllers: [BlockListController],
  providers: [BlockListService]
})
export class BlockListModule {}
