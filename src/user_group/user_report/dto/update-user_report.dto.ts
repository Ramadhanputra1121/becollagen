import { PartialType } from '@nestjs/swagger';
import { CreateUserReportDto } from './create-user_report.dto';

export class UpdateUserReportDto extends PartialType(CreateUserReportDto) {}
