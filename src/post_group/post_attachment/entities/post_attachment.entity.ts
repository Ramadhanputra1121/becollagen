import { Post } from "src/post_group/post/entities/post.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class PostAttachment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(Type => Post,post=> post.post_attachment)
    @JoinColumn({name: "post_id"})
    post: Post

    @Column({length: 255})
    attachment_url: string;

    @Column({length: 255})
    thumb_url: string;

    @CreateDateColumn()
    created_at: string;

    @UpdateDateColumn()
    updated_at: string;
}
