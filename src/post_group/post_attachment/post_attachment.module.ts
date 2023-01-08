import { Module } from '@nestjs/common';
import { PostAttachmentService } from './post_attachment.service';
import { PostAttachmentController } from './post_attachment.controller';
import { PostModule } from 'src/post_group/post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostAttachment } from './entities/post_attachment.entity';

@Module({
  imports:[PostModule,TypeOrmModule.forFeature([PostAttachment])],
  controllers: [PostAttachmentController],
  providers: [PostAttachmentService]
})
export class PostAttachmentModule {}
