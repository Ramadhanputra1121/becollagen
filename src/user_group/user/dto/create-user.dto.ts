import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ required: true, maxLength: 255, description: "User email address.", pattern: "mail@provider.com", example: "example@mail.com" })
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(255)
    email: string;
    
    @ApiProperty({ required: true, description: "Password for the user account.", example: "$0||\\//||3_57R0N6-P45$W0RD" })
    @IsNotEmpty()
    @IsString()
    password: string;
    
    @ApiProperty({ required: true, maxLength: 45, description: "Name of the user account.", example: "user007" })
    @IsNotEmpty()
    @IsString()
    @MaxLength(45)
    @IsAlphanumeric()
    username: string;
}
