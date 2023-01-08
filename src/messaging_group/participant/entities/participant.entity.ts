import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum participant_role {
    MEMBER = "member",
    ADMIN = "admin"
}

@Entity()
export class Participant {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number;

    @Column({unsigned: true})
    group_chat_id: number;

    @Column({unsigned: true})
    user_id: number;

    @Column({ type: "enum", enum: participant_role, nullable: false })
    role: participant_role;

    @CreateDateColumn({})
    created_at: Date;

    @UpdateDateColumn({})
    update_at: Date;
}