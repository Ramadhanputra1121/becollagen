import { Module } from '@nestjs/common';
import { UserReportService } from './user_report.service';
import { UserReportController } from './user_report.controller';

@Module({
  controllers: [UserReportController],
  providers: [UserReportService]
})
export class UserReportModule {}
