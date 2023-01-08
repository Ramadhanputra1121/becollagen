import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class product_attachment{
    // MySQL properties: belongs to Primary Key (PK), Not Null (NN), Unique Index (UQ), Unsigned data type (UN), Auto Incremental (AI)
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:255, nullable:false})
    attachment_url:string; //VARCHAR(255)

    @Column({length:255, nullable:false})
    thumb_url:string; //VARCHAR (255)

    @CreateDateColumn()
    created_at: string;

    @CreateDateColumn()
    updated_at: string;
}