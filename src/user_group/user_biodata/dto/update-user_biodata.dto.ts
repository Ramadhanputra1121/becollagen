import { PartialType } from '@nestjs/swagger';
import { CreateUserBiodataDto } from './create-user_biodata.dto';

export class UpdateUserBiodataDto extends PartialType(CreateUserBiodataDto) {}
