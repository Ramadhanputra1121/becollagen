import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateMajorDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    name: string
}
