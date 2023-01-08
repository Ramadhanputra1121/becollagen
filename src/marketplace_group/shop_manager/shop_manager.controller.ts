import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopManagerService } from './shop_manager.service';
import { CreateShopManagerDto } from './dto/create-shop_manager.dto';
import { UpdateShopManagerDto } from './dto/update-shop_manager.dto';

@Controller('shop-manager')
export class ShopManagerController {
  constructor(private readonly shopManagerService: ShopManagerService) {}

  @Post()
  create(@Body() createShopManagerDto: CreateShopManagerDto) {
    return this.shopManagerService.create(createShopManagerDto);
  }

  @Get()
  findAll() {
    return this.shopManagerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopManagerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopManagerDto: UpdateShopManagerDto) {
    return this.shopManagerService.update(+id, updateShopManagerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopManagerService.remove(+id);
  }
}
