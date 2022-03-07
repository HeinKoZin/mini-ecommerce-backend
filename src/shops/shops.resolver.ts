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
import { Shop } from './entities/shop.entity';
import { CreateShopInput } from './dto/create-shop.input';
import { UpdateShopInput } from './dto/update-shop.input';

@Resolver(() => Shop)
export class ShopsResolver {
  constructor(private readonly shopsService: ShopsService) {}

  @Mutation(() => Shop)
  createShop(
    @Args('createShopInput') createShopInput: CreateShopInput,
    @Args('ownerId') ownerId: number,
  ) {
    return this.shopsService.create(createShopInput, ownerId);
  }

  @Query(() => [Shop], { name: 'shops' })
  findAll() {
    return this.shopsService.findAll();
  }

  @ResolveField()
  async owners(@Parent() shop: Shop) {
    return this.shopsService.getOwners(shop.id);
  }

  @ResolveField()
  async products(@Parent() shop: Shop) {
    return await this.shopsService.getProducts(shop.id);
  }

  @Query(() => Shop, { name: 'shop' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.shopsService.findOne(id);
  }

  @Mutation(() => Shop)
  updateShop(@Args('updateShopInput') updateShopInput: UpdateShopInput) {
    return this.shopsService.update(updateShopInput.id, updateShopInput);
  }

  @Mutation(() => Shop)
  removeShop(@Args('id', { type: () => Int }) id: number) {
    return this.shopsService.remove(id);
  }
}
