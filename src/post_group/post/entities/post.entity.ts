import { PostAttachment } from "src/post_group/post_attachment/entities/post_attachment.entity";
import { PostReaction } from "src/post_group/post_reaction/entities/post_reaction.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;

    @Column()
    user_id: number;

    @Column({length:100})
    title: string;

    @Column({length:1000})
    message: string;

    @CreateDateColumn()
    created_at: string;

    @UpdateDateColumn()
    updated_at: string;

    @Column({default:0})
    like_count: number;
    
    @Column({default:0})
    dislike_count: number;

    @Column({default:0})
    comment_count: number;

    @OneToMany(Type => PostReaction, PostReaction => PostReaction.post)
    post_reaction: PostReaction[];

    @OneToMany(Type => PostAttachment, postattachment => postattachment.post)
    post_attachment: PostAttachment[];
}
