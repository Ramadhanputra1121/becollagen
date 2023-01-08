import { PartialType } from '@nestjs/swagger';
import { CreatePostReactionDto } from './create-post_reaction.dto';

export class UpdatePostReactionDto extends PartialType(CreatePostReactionDto) {}
