import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostService } from 'src/post_group/post/post.service';
import { Repository } from 'typeorm';
import { CreatePostReactionDto } from './dto/create-post_reaction.dto';
import { UpdatePostReactionDto } from './dto/update-post_reaction.dto';
import { PostReaction } from './entities/post_reaction.entity';

@Injectable()
export class PostReactionService {
  constructor(
    @InjectRepository(PostReaction)
    private readonly PostReactionRepository: Repository<PostReaction>,
    private readonly PostService: PostService,
  ){}
  async create(createPostReactionDto: CreatePostReactionDto) {
    const reactions=await this.findOne(createPostReactionDto.user_id);
    if(!reactions){
      const new_reaction= this.PostReactionRepository.create(createPostReactionDto);
      return this.PostReactionRepository.save(new_reaction);
    }
    const post=await this.PostService.findOne(createPostReactionDto.post_id)
    if(reactions.reaction==createPostReactionDto.reaction){
    }
  }

  findOne(user_id: number) {
    return this.PostReactionRepository.findOneBy({user_id});
  }

  update(id: number, updatePostReactionDto: UpdatePostReactionDto) {
    return `This action updates a #${id} postReaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} postReaction`;
  }
}
