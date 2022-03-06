import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { ShopsService } from '@shops/shops.service';

@Module({
  providers: [ProductsResolver, ProductsService, ShopsService],
})
export class ProductsModule {}
