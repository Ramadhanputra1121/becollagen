import { ApiProperty } from "@nestjs/swagger";
import { Major } from "src/user_group/major/entities/major.entity";
import { University } from "src/user_group/university/entities/university.entity";
import { User } from "src/user_group/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

export enum Gender {
    MALE = "Male",
    FEMALE = "Female",
    UNKNOWN = "Unknown"
}

@Entity()
export class UserBiodata {
    // MySQL properties: ~~belongs to Primary Key (PK)~~, Not Null (NN), Unique index (UQ), Unsigned data type (UN)
    @ApiProperty({ required: true, type: "int", uniqueItems: true, title: "ID", description: "Unique Identifier of the row; Primary Key is required in TypeORM and can not be a type of Object (have relation to other table)." })
    @PrimaryColumn({ type: "int", name: "id", nullable: false, unsigned: false })
    id: number;
    
    // MySQL properties: ~~belongs to Primary Key (PK)~~, Not Null (NN), Unsigned data type (UN)
    @ApiProperty({ required: true, uniqueItems: true, title: "User", description: "Foreign Key linking to the User object; The ID should match the User ID in the 'user' table (and ID above)." })
    @OneToOne((type) => User, (user) => user.id)
    @JoinColumn({ name: "user_id", referencedColumnName: "id" })
    user: User; // INT Foreign Key --> Primary Key in TypeORM
    
    @ApiProperty({ required: false, maxLength: 45, description: "Name of the user; Not account name or username." })
    @Column({ type: "varchar", length: 45, nullable: true })
    name: string; // VARCHAR(45)
    
    @ApiProperty({ required: false, type: "date", description: "Birth date of the user." })
    @Column({ type: "date", nullable: true })
    date_of_birth: Date; // DATE
    
    @ApiProperty({ required: false, description: "Gender of the user." })
    @Column({ 
        type: "enum",
        enum: Gender,
        default: Gender.UNKNOWN,
        nullable: true
    })
    gender: Gender; // ENUM('Male','Female','Unknown')
    
    @ApiProperty({ required: false, title: "University", description: "Foreign Key linking to the University object; The university in which the user enroll." })
    // MySQL properties: Unsigned data type (UN)
    // @Column({ type: "int", nullable: false, unsigned: true })
    @ManyToOne((type) => University, (university) => university.id)
    @JoinColumn({ name: "university_id", referencedColumnName: "id" })
    university: University; // INT Foreign Key
    
    @ApiProperty({ required: false, title: "Major", description: "Foreign Key linking ot the Major object; The field in which the user majoring." })
    // MySQL properties: Unsigned data type (UN)
    // @Column({ type: "int", nullable: true, unsigned: true })
    @ManyToOne((type) => Major, (major) => major.id)
    @JoinColumn({ name: "major_id", referencedColumnName: "id" })
    major: Major; // INT Foreign Key
    
    @ApiProperty({ required: true, type: "datetime", description: "Creation date of the row."})
    // MySQL properties: Not Null (NN)
    @CreateDateColumn({ type: "datetime", nullable: false })
    created_at: Date; // DATETIME
    
    @ApiProperty({ required: false, type: "datetime", description: "Latest update time of the row." })
    // MySQL properties: none checked
    @UpdateDateColumn({ type: "datetime", nullable: true })
    updated_at: Date; // DATETIME
}
