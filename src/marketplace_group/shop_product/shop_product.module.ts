import { Module } from '@nestjs/common';
import { ShopProductService } from './shop_product.service';
import { ShopProductController } from './shop_product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { shop_product } from './entities/shop_product.entity';
@Module({
  imports:[TypeOrmModule.forFeature([shop_product])],
  controllers: [ShopProductController],
  providers: [ShopProductService],
  exports: [ShopProductService]
})
export class ShopProductModule {}
