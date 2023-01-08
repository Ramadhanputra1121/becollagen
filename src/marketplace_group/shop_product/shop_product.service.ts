import { Injectable } from '@nestjs/common';
import { CreateShopProductDto } from './dto/create-shop_product.dto';
import { UpdateShopProductDto } from './dto/update-shop_product.dto';
import { BadGatewayException, BadRequestException, HttpException} from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { shop_product } from './entities/shop_product.entity';

@Injectable()
export class ShopProductService {
  constructor(
    @InjectRepository(shop_product)
    private readonly shop_productRepository: Repository<shop_product>
  ){}
  create(createShopProductDto: CreateShopProductDto) {
    const newShop_product=this.shop_productRepository.create(createShopProductDto);
    return this.shop_productRepository.save (newShop_product);
  }

  findAll() {
    return this.shop_productRepository.find();
  }

  findOne(id: number) {
    return this.shop_productRepository.findOneBy({});
  }

  async update(id: number, updateShopProductDto: UpdateShopProductDto) {
    try{
      const shop_product= this.findOne(id);

      if(!shop_product){
        throw new BadRequestException(`Product with this is '${id}' Does not exist`);
      }
      return this.shop_productRepository.update(id ,{...shop_product, ...updateShopProductDto})
    } catch(err){
      throw new HttpException(err, HttpStatus.BAD_REQUEST)
    }
  }

  async remove(id: number) {
    const shop_product = await this.findOne(id);
    return this.shop_productRepository.remove(shop_product);
  }
}
