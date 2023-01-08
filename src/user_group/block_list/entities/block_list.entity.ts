import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user_group/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class BlockList {
    @ApiProperty({ required: true, uniqueItems: true })
    @PrimaryGeneratedColumn({ type: "int", unsigned: true })
    id: number; // INT
    
    // MySQL properties: ~~belongs to Primary Key (PK)~~, Not Null (NN), Unsigned data type (UN)
    @ApiProperty({ required: true })
    @Column({ type: "int", nullable: false, unsigned: false })
    @ManyToOne(() => User, (user) => user.id)
    user_id: number; // INT Foreign Key --> Primary Key in TypeORM
    
    // MySQL properties: ~~belongs to Primary Key (PK)~~, Not Null (NN), Unsigned data type (UN)
    @ApiProperty({ required: true })
    @Column({ type: "int", nullable: false, unsigned: false })
    @ManyToOne(() => User, (user) => user.id)
    target_user_id: number; // INT Foreign Key --> Primary Key in TypeORM
    
    @ApiProperty({ required: true, type: "boolean" })
    // MySQL properties: Not Null (NN)
    @Column({ type: "boolean", nullable: false, default: false })
    is_blocked: boolean; // BOOLEAN --> TINYINT(1)
    
    @ApiProperty({ required: true, type: "datetime" })
    // MySQL properties: Not Null (NN)
    @CreateDateColumn({ type: "datetime", nullable: false })
    created_at: Date; // DATETIME
    
    @ApiProperty({ required: false, type: "datetime" })
    // MySQL properties: none checked
    @UpdateDateColumn({ type: "datetime", nullable: true })
    updated_at: Date; // DATETIME
}
