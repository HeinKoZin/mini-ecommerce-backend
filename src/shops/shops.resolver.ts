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
// import { Shop } from './entities/shop.entity';
// import { CreateShopInput } from './dto/create-shop.input';
// import { UpdateShopInput } from './dto/update-shop.input';
// import { Shop } from '@dtos/shop/shop.model';
import { ShopCreateInput } from '@dtos/shop/shop-create.input';
import { ShopUpdateInput } from '@dtos/shop/shop-update.input';
import { ShopEntity } from './entities/shop.entity';
import { UserEntity } from '@users/entities/user.entity';
import { Product } from '@generated/prisma-nestjs-graphql/product/product.model';
import { ShopCount } from '@generated/prisma-nestjs-graphql/shop/shop-count.output';

@Resolver(() => ShopEntity)
export class ShopsResolver {
  constructor(private readonly shopsService: ShopsService) {}

  @Mutation(() => ShopEntity)
  createShop(
    @Args('createShopInput') createShopInput: ShopCreateInput,
    @Args('ownerId') ownerId: number,
  ) {
    return this.shopsService.create(createShopInput, ownerId);
  }

  @Query(() => [ShopEntity], { name: 'shops' })
  findAll() {
    return this.shopsService.findAll();
  }

  @ResolveField(() => [UserEntity])
  async owners(@Parent() shop: ShopEntity) {
    return await this.shopsService.getOwners(shop.id);
  }

  @ResolveField(() => Product)
  async products(@Parent() shop: ShopEntity) {
    return await this.shopsService.getProducts(shop.id);
  }

  @ResolveField(() => ShopCount)
  async _count(@Parent() shop: ShopEntity) {
    console.log('Count on shop', shop);
    return await this.shopsService.getCounts(shop.id);
  }

  @Query(() => ShopEntity, { name: 'shop' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.shopsService.findOne(id);
  }

  @Mutation(() => ShopEntity)
  updateShop(@Args('updateShopInput') updateShopInput: ShopUpdateInput) {
    return this.shopsService.update(updateShopInput);
  }

  @Mutation(() => ShopEntity)
  removeShop(@Args('id', { type: () => Int }) id: number) {
    return this.shopsService.remove(id);
  }
}
