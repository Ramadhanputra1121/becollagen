import { PartialType } from '@nestjs/swagger';
import { CreateShopManagerDto } from './create-shop_manager.dto';

export class UpdateShopManagerDto extends PartialType(CreateShopManagerDto) {}
