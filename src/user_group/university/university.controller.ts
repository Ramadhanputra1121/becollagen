import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UniversityService } from './university.service';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('university')
export class UniversityController {
  constructor(private readonly univerityService: UniversityService) {}

  @Post()
  create(@Body() createUniversityDto: CreateUniversityDto) {
    return this.univerityService.create(createUniversityDto);
  }

  @Get()
  findAll() {
    return this.univerityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.univerityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUniverityDto: UpdateUniversityDto) {
    return this.univerityService.update(+id, updateUniverityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.univerityService.remove(+id);
  }
}
