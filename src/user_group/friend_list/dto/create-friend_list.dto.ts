import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class CreateFriendListDto {
    @ApiProperty({ required: true, title: "User ID", description: "Unique identifier of the user who adds another user as friend." })
    @IsNotEmpty()
    @IsNumber()
    user_id: number;
    
    @ApiProperty({ required: true, title: "Target User ID", description: "Unique identifier of the befriended user." })
    @IsNotEmpty()
    @IsNumber()
    target_user_id: number;
    // @IsNotEmpty()
    // @IsNumber({}, { each: true })
    // target_user_ids: number[];
    
    @ApiProperty({ required: true, description: "Current status between user and target user." })
    @IsNotEmpty()
    @IsBoolean()
    is_friend: boolean;
}
