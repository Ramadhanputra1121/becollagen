import { UserBiodata } from "src/user_group/user_biodata/entities/user_biodata.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Major {
    // MySQL properties: belongs to Primary Key (PK), Not Null (NN), Unique Index (UQ), Unsigned data type (UN), Auto Incremental (AI)
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number; // auto increment INT
    
    // MySQL properties: Not Null (NN)
    @Column({ length: 255, nullable: false })
    name: string; // VARCHAR(255)
    
    // ----------------------------------------
    // Not Shown in MySQL Table
    @OneToMany((type) => UserBiodata, (userBiodata) => userBiodata.user.id)
    users_biodata: UserBiodata[];
}
