import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm';

@Entity()
export class UniversityEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    officialName: string;

    @Column()
    alias: string;

    @Column()
    abbreviation: string;

    @Column()
    locationId: number;

    @CreateDateColumn()
    createdAt: number

    @UpdateDateColumn()
    updatedAt: number

    @DeleteDateColumn()
    deletedAt: number
}
