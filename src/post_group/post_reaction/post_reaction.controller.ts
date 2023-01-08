import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostReactionService } from './post_reaction.service';
import { CreatePostReactionDto } from './dto/create-post_reaction.dto';
import { UpdatePostReactionDto } from './dto/update-post_reaction.dto';

@Controller('post-reaction')
export class PostReactionController {
  constructor(private readonly postReactionService: PostReactionService) {}

  @Post()
  create(@Body() createPostReactionDto: CreatePostReactionDto) {
    return this.postReactionService.create(createPostReactionDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostReactionDto: UpdatePostReactionDto) {
    return this.postReactionService.update(+id, updatePostReactionDto);
  }
}
