import { Injectable } from '@nestjs/common';
import { CreateUserReportDto } from './dto/create-user_report.dto';
import { UpdateUserReportDto } from './dto/update-user_report.dto';

@Injectable()
export class UserReportService {
  create(createUserReportDto: CreateUserReportDto) {
    return 'This action adds a new userReport';
  }

  findAll() {
    return `This action returns all userReport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userReport`;
  }

  update(id: number, updateUserReportDto: UpdateUserReportDto) {
    return `This action updates a #${id} userReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} userReport`;
  }
}
