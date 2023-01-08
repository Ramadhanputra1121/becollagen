import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany
} from 'typeorm';
import {UniversityEntity} from "../../universities/entities/university.entity";

export enum UserRole {
  ADMIN = "admin",
  EDITOR = "editor",
  USER = "user",
  GHOST = "ghost",
}

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({ length: 60 })
  password: string;

  @Column({ length: 255 })
  address: string;

  @Column()
  status: number;

  @Column()
  phoneNumber: string;

  @Column({ type: "date", default: '0000-01-01'})
  dateOfBirth: string;

  @Column()
  profilePictureURL: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole

  @OneToMany(() => UniversityEntity, (university) => university.id)
  @Column()
  universityID: number;

  @CreateDateColumn()
  createdAt: number

  @UpdateDateColumn()
  updatedAt: number

  @DeleteDateColumn()
  deletedAt: number
}
