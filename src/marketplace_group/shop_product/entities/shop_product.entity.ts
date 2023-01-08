import { User } from './../../../user_group/user/entities/user.entity';
import { Shop } from "src/marketplace_group/shop/entities/shop.entity";
import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, JoinColumn} from "typeorm";


@Entity()
export class shop_product{
    @PrimaryGeneratedColumn()
    Id : number;
    @ManyToOne(() => Shop, (shop) => shop.id)
    @JoinColumn({name:"shop_id"})
    shop : Shop;
    @Column({length:255, nullable:false})
    name : string;
    @Column({length:255, nullable:false})
    description : string;
    @CreateDateColumn()
    created_at : Date;
    @UpdateDateColumn()
    updated_at : Date;
    @Column({type:'boolean'})
    status : boolean;
    @Column({length:255, nullable:false})
    primary_thumb : string;
    @Column({unsigned:true})
    tagId : number;
    @Column({nullable:false})
    price : number;
    @Column({length:255, nullable:false})
    location : string;
    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({name:"creator_id"})
    creator : User;
}