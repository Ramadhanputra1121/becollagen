import {UserRole} from "../entities/users.entity";

export interface IUsers {
  readonly id: number;
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly status: number;
  readonly phoneNumber: string;
  readonly dateOfBirth: string;
  readonly profilePictureURL: string;
  readonly role: UserRole;
  readonly universityID: number;
  readonly createdAt: number;
  readonly updatedAt: number;
  readonly deletedAt: number;
}
