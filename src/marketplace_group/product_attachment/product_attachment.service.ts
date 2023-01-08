import { Injectable } from '@nestjs/common';
import { CreateProductAttachmentDto } from './dto/create-product_attachment.dto';
import { UpdateProductAttachmentDto } from './dto/update-product_attachment.dto';

@Injectable()
export class ProductAttachmentService {
  create(createProductAttachmentDto: CreateProductAttachmentDto) {
    return 'This action adds a new productAttachment';
  }

  findAll() {
    return `This action returns all productAttachment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productAttachment`;
  }

  update(id: number, updateProductAttachmentDto: UpdateProductAttachmentDto) {
    return `This action updates a #${id} productAttachment`;
  }

  remove(id: number) {
    return `This action removes a #${id} productAttachment`;
  }
}
