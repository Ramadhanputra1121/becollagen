import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostService } from 'src/post_group/post/post.service';
import { Repository } from 'typeorm';
import { CreatePostAttachmentDto } from './dto/create-post_attachment.dto';
import { UpdatePostAttachmentDto } from './dto/update-post_attachment.dto';
import { PostAttachment } from './entities/post_attachment.entity';

@Injectable()
export class PostAttachmentService {
  constructor(
    @InjectRepository(PostAttachment)
    private readonly PostAttachmentRepository: Repository<PostAttachment>,
    private readonly PostService: PostService
  ){}
  async create(createPostAttachmentDto: CreatePostAttachmentDto) {
    const new_attachment = this.PostAttachmentRepository.create(createPostAttachmentDto);
    const post= await this.PostService.findOne(createPostAttachmentDto.post_id)
    return this.PostAttachmentRepository.save({...new_attachment,post: post});
  }

  findByPost(post_id: number){
    return this.PostAttachmentRepository.find(
      {
        relations: {
          post: true
        },
        where: {
          post: {
            id: post_id
          }
        }
      }
    )
  }

  async update(id: number, updatePostAttachmentDto: UpdatePostAttachmentDto) {
    try{
      const post_attachment=this.PostAttachmentRepository.findOneBy({id});

      if(!post_attachment){
        throw new BadRequestException(`Post with id '${id}' Does not exist`);
      }
      return this.PostAttachmentRepository.update(id ,{...post_attachment, ...updatePostAttachmentDto})
    }catch(err){
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    const post_attachment = await this.PostAttachmentRepository.findOneBy({id});
    
    return this.PostAttachmentRepository.remove(post_attachment);
  }
}
