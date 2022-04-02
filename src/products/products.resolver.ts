import { CurrenciesOnProducts } from '@generated/prisma-nestjs-graphql/currencies-on-products/currencies-on-products.model';
import { Currency } from '@generated/prisma-nestjs-graphql/currency/currency.model';
import { ProductCount } from '@generated/prisma-nestjs-graphql/product/product-count.output';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ShopEntity } from '@shops/entities/shop.entity';
import console from 'console';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { ProductEntity } from './entities/product.entity';
import { ProductsService } from './products.service';
// import { ProductCreateInput } from '@dtos/product/product-create.input';
// import { ProductUpdateInput } from '@dtos/product/product-update.input';
// import { Product } from '@dtos/product/product.model';

@Resolver(() => ProductEntity)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => ProductEntity)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productsService.create(createProductInput);
  }

  @Query(() => [ProductEntity], { name: 'products' })
  findAll(
    @Args('take', { type: () => Int, nullable: true }) take?: number,
    @Args('cursor', { type: () => Int, nullable: true })
    cursor?: number,
  ) {
    return this.productsService.findAll(take, cursor);
  }

  @ResolveField(() => [CurrenciesOnProducts])
  async currencies(@Parent() product: ProductEntity) {
    return await this.productsService.getCurrencies(product.id);
  }

  @ResolveField(() => ProductCount)
  async _count(@Parent() product: ProductEntity) {
    return product._count
      ? product._count
      : await this.productsService.getCounts(product.id);
  }

  @ResolveField(() => ShopEntity)
  async shop(@Parent() product: ProductEntity) {
    return await this.productsService.getShop(product.id);
  }

  @Query(() => ProductEntity, { name: 'product' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.findOne(id);
  }

  @Mutation(() => ProductEntity)
  updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
    @Args('id') id: number,
  ) {
    return this.productsService.update(id, updateProductInput);
  }

  @Mutation(() => ProductEntity)
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.remove(id);
  }
}

@Resolver(() => Currency)
export class CurrencyResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => Currency)
  findOne() {
    console.log('Called Currency');
    return 'test';
  }
}
