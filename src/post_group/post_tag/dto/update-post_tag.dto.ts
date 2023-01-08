import { PartialType } from '@nestjs/swagger';
import { CreatePostTagDto } from './create-post_tag.dto';

export class UpdatePostTagDto extends PartialType(CreatePostTagDto) {}
