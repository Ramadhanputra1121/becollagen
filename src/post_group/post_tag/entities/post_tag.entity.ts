import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PostTag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tag_id: number;
}
