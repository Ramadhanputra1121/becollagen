import { BadGatewayException, BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ){}
  create(createPostDto: CreatePostDto) {
    const newPost=this.postRepository.create(createPostDto);
    return this.postRepository.save(newPost);
  }

  findAll() {
    return this.postRepository.find();
  }
  
  findOne(id: number) {
    return this.postRepository.findOneBy({id});
  }

  findByUser(user_id:number){
    return this.postRepository.findBy({user_id})
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    try{
      const post=this.findOne(id);

      if(!post){
        throw new BadRequestException(`Post with id '${id}' Does not exist`);
      }
      return this.postRepository.update(id ,{...post, ...updatePostDto})
    }catch(err){
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    const post = await this.findOne(id);
    
    return this.postRepository.remove(post);
  }
}
