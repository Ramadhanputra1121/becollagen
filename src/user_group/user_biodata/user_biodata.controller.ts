import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserBiodataService } from './user_biodata.service';
import { CreateUserBiodataDto } from './dto/create-user_biodata.dto';
import { UpdateUserBiodataDto } from './dto/update-user_biodata.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserBiodata } from './entities/user_biodata.entity';

@ApiTags('User')
@Controller('user-biodata')
export class UserBiodataController {
  constructor(private readonly userBiodataService: UserBiodataService) {}

  // @Post()
  // create(@Body() createUserBiodataDto: CreateUserBiodataDto) {
  //   return this.userBiodataService.create(createUserBiodataDto);
  // }

  @Get()
  findAll(): Promise<UserBiodata[]> {
    return this.userBiodataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserBiodata> {
    return this.userBiodataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserBiodataDto: UpdateUserBiodataDto): Promise<UserBiodata> {
    return this.userBiodataService.update(+id, updateUserBiodataDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string): Promise<UserBiodata> {
    return this.userBiodataService.remove(+id);
  }
}
