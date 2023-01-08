import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import {Users} from "./src/users/entities/users.entity";
import {UniversityEntity} from "./src/universities/entities/university.entity";

config();

const configService = new ConfigService();
export default new DataSource({
  type: 'mysql',
  host: configService.get<string>('TYPEORM_HOST'),
  port: configService.get<number>('TYPEORM_PORT'),
  username: configService.get<string>('TYPEORM_USERNAME'),
  password: configService.get<string>('TYPEORM_PASSWORD'),
  database: configService.get<string>('TYPEORM_DATABASE'),
  entities: [
      Users,
      UniversityEntity,
  ],
  migrations: [],
});
