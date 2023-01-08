import { IsNumber, Max, MaxLength } from 'class-validator';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';


export class CreateShopProductDto {
    @IsString()
    @MaxLength(255)
    primary_thumb : string;
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    name : string;
    @IsNotEmpty()
    @IsNumber()
    price : number;
    @IsString()
    @MaxLength(255)
    description : string;
    @IsNotEmpty()
    @IsString()
    location : string;
}
