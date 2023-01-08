import { User } from "src/user_group/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class GroupChat {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number;
    
    @Column({ length: 100, nullable: false })
    title: string;
    
    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: "creator_id" })
    creator: User;

    @Column({ length: 1000, nullable: false })
    description: string;

    @CreateDateColumn({})
    created_at: Date;

    @UpdateDateColumn({})
    update_at: Date;
}