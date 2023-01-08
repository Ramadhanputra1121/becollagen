import {Entity} from 'typeorm';

@Entity()
export class IUniversity {
    id: number;
    officialName: string;
    alias: string;
    abbreviation: string;
    locationId: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
}
