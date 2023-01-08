import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Shop_Manager{
    // MySQL properties: belongs to Primary Key (PK), Not Null (NN), Unique Index (UQ), Unsigned data type (UN), Auto Incremental (AI)
    @PrimaryGeneratedColumn()
    id:number; //auto increment INT

    @Column({unsigned:true})
    ShopId:number; //Masukkin ShopId

    @Column({unsigned:true})
    UserId:number; //Masukkin UserId

    @CreateDateColumn()
    created_at: string;

    @CreateDateColumn()
    updated_at: string;
}