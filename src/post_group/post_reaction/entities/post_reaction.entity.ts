import { Post } from "src/post_group/post/entities/post.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export enum Reaction{
    LIKE="like",
    DISLIKE="dislike",
    NONE="none",
}

@Entity()
export class PostReaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @ManyToOne(Type => Post, post => post.post_reaction)
    @JoinColumn({name: "post_id"})
    post: Post;

    @Column({
        type: "enum", enum: Reaction, default: Reaction.NONE
    })
    reaction: Reaction;

    @CreateDateColumn()
    created_at: string;

    @UpdateDateColumn()
    updated_at: string;

}
