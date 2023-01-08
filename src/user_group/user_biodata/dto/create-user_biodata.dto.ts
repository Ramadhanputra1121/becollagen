import { ApiPropertyOptional } from "@nestjs/swagger";
import { Allow, IsDate, IsNumber, IsString, MaxLength } from "class-validator";
import { Gender } from "../entities/user_biodata.entity";

export class CreateUserBiodataDto {
    @ApiPropertyOptional({ maxLength: 45 })
    @IsString()
    @MaxLength(45)
    name: string;
    
    @ApiPropertyOptional()
    @IsDate()
    date_of_birth: string;
    
    @ApiPropertyOptional()
    @Allow()
    gender: Gender;
    
    @ApiPropertyOptional()
    @IsNumber()
    university_id: number;
    
    @ApiPropertyOptional()
    @IsNumber()
    major_id: number;
}
