import { PartialType } from '@nestjs/swagger';
import { CreateProductAttachmentDto } from './create-product_attachment.dto';

export class UpdateProductAttachmentDto extends PartialType(CreateProductAttachmentDto) {}
