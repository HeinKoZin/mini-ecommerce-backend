import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { PrismaService } from '@prisma.service';
import { ShopsService } from '@shops/shops.service';

@Module({
  providers: [ProductsResolver, ProductsService, PrismaService, ShopsService],
})
export class ProductsModule {}
