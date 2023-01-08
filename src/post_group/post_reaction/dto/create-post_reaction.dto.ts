import {  IsNotEmpty, IsNumber } from "class-validator";
import { Reaction } from "../entities/post_reaction.entity";

export class CreatePostReactionDto {
    @IsNotEmpty()
    @IsNumber()
    user_id: number;
    @IsNotEmpty()
    @IsNumber()
    post_id: number;
    @IsNotEmpty()
    reaction: Reaction;
}
