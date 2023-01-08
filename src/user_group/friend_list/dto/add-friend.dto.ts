import { IsNotEmpty, IsNumber } from "class-validator";

export class AddFriendDto {
    @IsNotEmpty()
    @IsNumber()
    target_user_id: number
}
