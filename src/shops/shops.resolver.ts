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
import { ProductEntity } from '@products/entities/product.entity';
import { UpdateShopInput } from './dto/update-shop.input';
import { CreateShopInput } from './dto/create-shop.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';
import { CurrentUser } from '@current-user.decorator';
import { CurrentUserEntity } from '@users/entities/current-user.entity';
import { PhoneOnShops } from '@generated/prisma-nestjs-graphql/phone-on-shops/phone-on-shops.model';
import { Stock } from '@generated/prisma-nestjs-graphql/stock/stock.model';

@Resolver(() => ShopEntity)
export class ShopsResolver {
  constructor(private readonly shopsService: ShopsService) {}

  @Mutation(() => ShopEntity)
  @UseGuards(JwtAuthGuard)
  createShop(
    @Args('createShopInput') createShopInput: CreateShopInput,
    @CurrentUser() user: CurrentUserEntity,
  ) {
    return this.shopsService.create(createShopInput, user);
  }

  @Query(() => [ShopEntity], { name: 'shops' })
  findAll(@Args('take', { type: () => Int, nullable: true }) take?: number) {
    return this.shopsService.findAll(take);
  }

  @ResolveField(() => [UserEntity])
  async owners(@Parent() shop: ShopEntity) {
    return await this.shopsService.getOwners(shop.id);
  }

  @ResolveField(() => [ProductEntity])
  async products(
    @Parent() shop: ShopEntity,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
  ) {
    return await this.shopsService.getProducts(shop.id, take);
  }

  @ResolveField(() => [PhoneOnShops])
  async phone_numbers(@Parent() shop: ShopEntity) {
    return await this.shopsService.getPhoneNumbers(shop.id);
  }

  @ResolveField(() => [Stock])
  async stocks(@Parent() shop: ShopEntity) {
    return await this.shopsService.getStocks(shop.id);
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
