import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUniversityDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    name: string;
}
