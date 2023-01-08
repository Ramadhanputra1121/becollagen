import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user_group/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class FriendList {
    @ApiProperty({ required: true, uniqueItems: true, title: "ID", description: "Unique identifier of the row in 'friend_list' table." })
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number; // INT
    
    // MySQL properties: ~~belongs to Primary Key (PK)~~, Not Null (NN), Unsigned data type (UN)
    // @ApiProperty({ required: true })
    // @Column({ type: "int", nullable: false, unsigned: true })
    // user_id: number; // INT
    
    @ApiProperty({ required: true, title: "User", description: "Linking to the User object; The user who adds another user as friend." })
    // @PrimaryColumn({ type: "int", name: "user_id", nullable: false, unsigned: true })
    @ManyToOne((type) => User, (user) => user.id, { cascade: true })
    @JoinColumn({ name: "user_id", referencedColumnName: "id" })
    readonly user: User; // INT Foreign Key
    
    // MySQL properties: ~~belongs to Primary Key (PK)~~, Not Null (NN), Unsigned data type (UN)
    // @ApiProperty({ required: true })
    // @Column({ type: "int", nullable: false, unsigned: true })
    // target_user_id: number; // INT
    
    @ApiProperty({ required: true, title: "Target User", description: "Linking to the User object; The befriended user." })
    @ManyToOne((type) => User, (user) => user.id, { cascade: true })
    @JoinColumn({ name: "target_user_id", referencedColumnName: "id" })
    readonly target_user: User; // INT Foreign Key
    
    // @ApiProperty({ required: true })
    // // @PrimaryColumn({ type: "int", name: "target_user_id", nullable: false, unsigned: true })
    // @ManyToOne((type) => User, (user) => user.id, { cascade: true })
    // @JoinColumn({ name: "target_user_ids" })
    // target_users: User[]; // INT Foreign Key
    
    @ApiProperty({ required: true, type: "boolean", description: "Current status between user and target user." })
    // MySQL properties: Not Null (NN)
    @Column({ type: "boolean", nullable: false, default: false })
    is_friend: boolean; // BOOLEAN --> TINYINT(1)
    
    @ApiProperty({ required: true, type: "datetime", description: "Creation date of the row in 'friend_list' table." })
    // MySQL properties: Not Null (NN)
    @CreateDateColumn({ type: "datetime", nullable: false })
    created_at: Date; // DATETIME
    
    @ApiProperty({ required: false, type: "datetime", description: "Latest update time of the row in 'friend_list' table." })
    // MySQL properties: none checked
    @UpdateDateColumn({ type: "datetime", nullable: true })
    updated_at: Date; // DATETIME
}
