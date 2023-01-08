import { Module } from '@nestjs/common';
import { PostTagService } from './post_tag.service';
import { PostTagController } from './post_tag.controller';

@Module({
  controllers: [PostTagController],
  providers: [PostTagService]
})
export class PostTagModule {}
