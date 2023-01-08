import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostAttachmentService } from './post_attachment.service';
import { CreatePostAttachmentDto } from './dto/create-post_attachment.dto';
import { UpdatePostAttachmentDto } from './dto/update-post_attachment.dto';

@Controller('post-attachment')
export class PostAttachmentController {
  constructor(private readonly postAttachmentService: PostAttachmentService) {}

  @Post()
  create(@Body() createPostAttachmentDto: CreatePostAttachmentDto) {
    return this.postAttachmentService.create(createPostAttachmentDto);
  }

  @Get(':post_id')
  findOne(@Param('post_id') post_id: number) {
    return this.postAttachmentService.findByPost(post_id);
  }

  @Patch(':id')
  update(@Param("id") id: number, @Body() updatePostAttachmentDto: UpdatePostAttachmentDto) {
    return this.postAttachmentService.update(id, updatePostAttachmentDto);
  }

  @Delete(':id')
  remove(@Param("id") id: number) {
    return this.postAttachmentService.remove(id);
  }
}
