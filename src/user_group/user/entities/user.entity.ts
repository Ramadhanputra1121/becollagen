import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { FriendList } from "src/user_group/friend_list/entities/friend_list.entity";
import { UserBiodata } from "src/user_group/user_biodata/entities/user_biodata.entity";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum UserStatus {
    ONLINE = "online",
    OFFLINE = "offline",
    BUSY = "busy",
    INVISIBLE = "invisible"
}

export enum UserAccessLevel {
    GUEST = "guest",
    RESTRICTED = "restricted",
    USER = "user",
    EDITOR = "editor",
    ADMIN = "admin"
}

@Entity()
export class User {
    @ApiProperty({ required: true, title: "ID", uniqueItems: true, description: "Unique identifier of the user." })
    // MySQL properties: belongs to Primary Key (PK), Not Null (NN), Unique Index (UQ), Unsigned data type (UN), Auto Incremental (AI)
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number; // auto increment INT
    
    @ApiProperty({ required: true, uniqueItems: true, maxLength: 255, description: "User e-mail address." })
    // MySQL properties: Not Null (NN)
    @Column({ length: 255, nullable: false, unique: true })
    email: string; // VARCHAR(255)
    
    @ApiProperty({ required: true, maxLength: 60, minLength: 60, description: "Encrypted password for the user account." })
    // MySQL properties: Not Null (NN)
    @Exclude({ toPlainOnly: true })
    @Column({ select: false, length: 60, nullable: false })
    password: string; // VARCHAR(60)
    
    @ApiProperty({ required: true, maxLength: 45, description: "Name of the user." })
    // MySQL properties: Not Null (NN)
    @Column({ length: 45, nullable: false })
    name: string; // VARCHAR(45)
    
    @ApiProperty({ required: true, default: UserStatus.OFFLINE, description: "User current status." })
    // MySQL properties: Not Null (NN)
    @Column({ 
        type: "enum",
        enum: UserStatus,
        default: UserStatus.OFFLINE,
        nullable: false
    })
    status: UserStatus; // ENUM('online','offline','busy','invisible')
    
    @ApiProperty({ required: true, default: UserAccessLevel.USER, description: "Access level of the user account." })
    // MySQL properties: Not Null (NN)
    @Column({ 
        type: "enum",
        enum: UserAccessLevel,
        default: UserAccessLevel.USER,
        nullable: false
    })
    access_level: UserAccessLevel; // ENUM('guest','restricted','user','editor','admin')
    
    @ApiProperty({ required: false, maxLength: 16, description: "User phone number." })
    // MySQL properties: none checked
    @Column({ length: 16, nullable: true })
    phone_number: string; // VARCHAR(16)
    
    @ApiProperty({ required: false, maxLength: 255, description: "URL to user profile picture." })
    // MySQL properties: none checked
    @Column({ length: 255, nullable: true }) // TO DO: add default value for profile picture url
    profile_picture_url: string; // VARCHAR(255)
    
    @ApiProperty({ required: false, maxLength: 255, description: "URL to compressed thumbnail of user profile picture." })
    // MySQL properties: none checked
    @Column({ length: 255, nullable: true })
    profile_picture_thumb_url: string; // VARCHAR(255)
    
    @ApiProperty({ required: true, default: 0, description: "Number of another unique user who have reported this user." })
    // MySQL properties: Not Null (NN)
    @Column({ nullable: false })
    report_count: number; // INT
    
    @ApiProperty({ required: true, description: "Creation time of this user account." })
    // MySQL properties: Not Null (NN)
    @CreateDateColumn({ type: "datetime", nullable: false })
    created_at: Date; // DATETIME
    
    @ApiProperty({ required: false, description: "Last update time of this user data." })
    // MySQL properties: none checked
    @UpdateDateColumn({ type: "datetime", nullable: true })
    updated_at: Date; // DATETIME
    
    // ----------------------------------------
    // Not Shown in MySQL Table
    
    @ApiProperty({ required: false, description: "Linking to the User Biodata object; Biodata of the user." })
    @OneToOne((type) => UserBiodata, (userBiodata) => userBiodata.user.id)
    user_biodata: UserBiodata;
    
    @ApiProperty({ required: false, description: "Linking to the Friend List object; List of user friends." })
    @OneToMany((type) => FriendList, (friendList) => friendList.user)
    friend_list: FriendList[];
}
