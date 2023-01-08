import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePostAttachmentDto {
    @IsNotEmpty()
    @IsNumber()
    post_id: number;
    @IsNotEmpty()
    @IsString()
    attachment_url: string;
    @IsNotEmpty()
    @IsString()
    thumb_url: string;
}
