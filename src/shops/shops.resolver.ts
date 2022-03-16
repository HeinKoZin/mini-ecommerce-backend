import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { ShopsService } from './shops.service';
import { ShopEntity } from './entities/shop.entity';
import { UserEntity } from '@users/entities/user.entity';
import { ShopCount } from '@generated/prisma-nestjs-graphql/shop/shop-count.output';
import { ProductEntity } from '@products/entities/product.entity';
import { UpdateShopInput } from './dto/update-shop.input';
import { CreateShopInput } from './dto/create-shop.input';

@Resolver(() => ShopEntity)
export class ShopsResolver {
  constructor(private readonly shopsService: ShopsService) {}

  @Mutation(() => ShopEntity)
  createShop(
    @Args('createShopInput') createShopInput: CreateShopInput,
    @Args('ownerId') ownerId: number,
  ) {
    return this.shopsService.create(createShopInput, ownerId);
  }

  @Query(() => [ShopEntity], { name: 'shops' })
  findAll(@Args('take', { type: () => Int, nullable: true }) take?: number) {
    return this.shopsService.findAll(take);
  }

  @ResolveField(() => [UserEntity])
  async owners(@Parent() shop: ShopEntity) {
    return await this.shopsService.getOwners(shop.id);
    // return shop.owners;
  }

  @ResolveField(() => [ProductEntity])
  async products(
    @Parent() shop: ShopEntity,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
  ) {
    return await this.shopsService.getProducts(shop.id, take);
  }

  @ResolveField(() => ShopCount)
  async _count(@Parent() shop: ShopEntity) {
    return shop._count;
  }

  @Query(() => ShopEntity, { name: 'shop' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.shopsService.findOne(id);
  }

  @Mutation(() => ShopEntity)
  updateShop(@Args('updateShopInput') updateShopInput: UpdateShopInput) {
    return this.shopsService.update(updateShopInput);
  }

  @Mutation(() => ShopEntity)
  removeShop(@Args('id', { type: () => Int }) id: number) {
    return this.shopsService.remove(id);
  }
}
