import { Module } from '@nestjs/common';
import { PostReactionService } from './post_reaction.service';
import { PostReactionController } from './post_reaction.controller';
import { PostReaction } from './entities/post_reaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from 'src/post_group/post/post.module';

@Module({
  imports: [TypeOrmModule.forFeature([PostReaction]), PostModule],
  controllers: [PostReactionController],
  providers: [PostReactionService]
})
export class PostReactionModule {}
