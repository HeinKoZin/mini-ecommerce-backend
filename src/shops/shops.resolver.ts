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

@Resolver(() => ShopEntity)
export class ShopsResolver {
  constructor(private readonly shopsService: ShopsService) {}

  @Mutation(() => ShopEntity)
  createShop(
    @Args('createShopInput') createShopInput: CreateShopInput,
    @Args('ownerId', { nullable: true }) ownerId: number,
  ) {
    return this.shopsService.create(createShopInput);
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
