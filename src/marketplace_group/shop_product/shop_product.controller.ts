import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopProductService } from './shop_product.service';
import { CreateShopProductDto } from './dto/create-shop_product.dto';
import { UpdateShopProductDto } from './dto/update-shop_product.dto';

@Controller('shop-product')
export class ShopProductController {
  constructor(private readonly shopProductService: ShopProductService) {}

  @Post()
  create(@Body() createShopProductDto: CreateShopProductDto) {
    return this.shopProductService.create(createShopProductDto);
  }

  @Get()
  findAll() {
    return this.shopProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopProductService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopProductDto: UpdateShopProductDto) {
    return this.shopProductService.update(Number(id), updateShopProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopProductService.remove(+id);
  }
}
