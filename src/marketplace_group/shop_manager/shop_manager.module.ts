import { Module } from '@nestjs/common';
import { ShopManagerService } from './shop_manager.service';
import { ShopManagerController } from './shop_manager.controller';

@Module({
  controllers: [ShopManagerController],
  providers: [ShopManagerService]
})
export class ShopManagerModule {}
