import { Injectable } from '@nestjs/common';
import { CreateShopManagerDto } from './dto/create-shop_manager.dto';
import { UpdateShopManagerDto } from './dto/update-shop_manager.dto';

@Injectable()
export class ShopManagerService {
  create(createShopManagerDto: CreateShopManagerDto) {
    return 'This action adds a new shopManager';
  }

  findAll() {
    return `This action returns all shopManager`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopManager`;
  }

  update(id: number, updateShopManagerDto: UpdateShopManagerDto) {
    return `This action updates a #${id} shopManager`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopManager`;
  }
}
