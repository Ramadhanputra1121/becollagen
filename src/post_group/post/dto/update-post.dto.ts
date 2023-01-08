import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, isNumber } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
}
