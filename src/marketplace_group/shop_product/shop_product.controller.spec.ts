import { Test, TestingModule } from '@nestjs/testing';
import { ShopProductController } from './shop_product.controller';
import { ShopProductService } from './shop_product.service';

describe('ShopProductController', () => {
  let controller: ShopProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopProductController],
      providers: [ShopProductService],
    }).compile();

    controller = module.get<ShopProductController>(ShopProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
