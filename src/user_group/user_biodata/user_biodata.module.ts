import { Module } from '@nestjs/common';
import { UserBiodataService } from './user_biodata.service';
import { UserBiodataController } from './user_biodata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBiodata } from './entities/user_biodata.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserBiodata])],
  controllers: [UserBiodataController],
  providers: [UserBiodataService]
})
export class UserBiodataModule {}
