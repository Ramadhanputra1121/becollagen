import { IsNumber, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePostDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(199)
    title: string;
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    message: string;
    @IsNotEmpty()
    @IsNumber()
    user_id: number;
}
