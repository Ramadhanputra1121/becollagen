import { shop_product } from './../../shop_product/entities/shop_product.entity';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany} from "typeorm";

@Entity()
export class Shop {
    // MySQL properties: belongs to Primary Key (PK), Not Null (NN), Unique Index (UQ), Unsigned data type (UN), Auto Incremental (AI)
    @PrimaryGeneratedColumn({unsigned: true})
    id: number; // auto increment INT

    @Column({ length: 100, nullable: false})
    name : string; //VARCHAR(100)

    @Column({unsigned:true})
    UserId: number; //Masukkin UserId

    @CreateDateColumn()
    created_at: string;

    @UpdateDateColumn()
    updated_at: string;

    @Column({length: 200, nullable: false})
    location: string; //VARCHAR(200)

    @Column({length:1000, nullable: true})
    description: string; //VARCHAR(1000)

    @OneToMany(() => shop_product, (shop_product) => shop_product.Id)
    shop_product : shop_product [];    
}