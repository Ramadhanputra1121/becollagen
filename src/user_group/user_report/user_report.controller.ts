import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserReportService } from './user_report.service';
import { CreateUserReportDto } from './dto/create-user_report.dto';
import { UpdateUserReportDto } from './dto/update-user_report.dto';

@Controller('user-report')
export class UserReportController {
  constructor(private readonly userReportService: UserReportService) {}

  @Post()
  create(@Body() createUserReportDto: CreateUserReportDto) {
    return this.userReportService.create(createUserReportDto);
  }

  @Get()
  findAll() {
    return this.userReportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userReportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserReportDto: UpdateUserReportDto) {
    return this.userReportService.update(+id, updateUserReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userReportService.remove(+id);
  }
}
