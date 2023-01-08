import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number;

    @Column({ length: 100, nullable: false })
    guid: string;

    @Column({unsigned: true})
    group_chat_id: number;

    @Column({unsigned: true})
    sender_id: number;

    @Column({ length: 1000, nullable: false })
    message: string;

    @CreateDateColumn({})
    created_at: Date;

    @UpdateDateColumn({})
    update_at: Date;

    @Column({})
    is_edited: Boolean;
}

