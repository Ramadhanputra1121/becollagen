import { IsNotEmpty, IsString } from "class-validator";

export class UpdatePostAttachmentDto{
    @IsNotEmpty()
    @IsString()
    attachment_url: string;
    @IsNotEmpty()
    @IsString()
    thumb_url: string;
}
