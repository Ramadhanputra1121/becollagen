import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductAttachmentService } from './product_attachment.service';
import { CreateProductAttachmentDto } from './dto/create-product_attachment.dto';
import { UpdateProductAttachmentDto } from './dto/update-product_attachment.dto';

@Controller('product-attachment')
export class ProductAttachmentController {
  constructor(private readonly productAttachmentService: ProductAttachmentService) {}

  @Post()
  create(@Body() createProductAttachmentDto: CreateProductAttachmentDto) {
    return this.productAttachmentService.create(createProductAttachmentDto);
  }

  @Get()
  findAll() {
    return this.productAttachmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productAttachmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductAttachmentDto: UpdateProductAttachmentDto) {
    return this.productAttachmentService.update(+id, updateProductAttachmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productAttachmentService.remove(+id);
  }
}
