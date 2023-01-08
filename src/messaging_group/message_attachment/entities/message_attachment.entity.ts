import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class MessageAttachment {
    @PrimaryGeneratedColumn({unsigned: true})
    message_id: number;

    @Column({ length: 255, nullable: false })
    file_url: string;

    @Column({ length: 255, nullable: false })
    thumb_url: string;

    @CreateDateColumn({})
    created_at: Date;

    @UpdateDateColumn({})
    update_at: Date;
}
