import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { WishlistsService } from './wishlists.service';
import { Wishlist } from './entities/wishlist.entity';
import { CreateWishlistInput } from './dto/create-wishlist.input';
import { UpdateWishlistInput } from './dto/update-wishlist.input';
import { UserEntity } from '@users/entities/user.entity';
import { ProductEntity } from '@products/entities/product.entity';
import { ProductsService } from '@products/products.service';

@Resolver(() => Wishlist)
export class WishlistsResolver {
  constructor(
    private readonly wishlistsService: WishlistsService,
    private readonly productsService: ProductsService,
  ) {}

  @Mutation(() => Wishlist)
  createWishlist(
    @Args('createWishlistInput') createWishlistInput: CreateWishlistInput,
  ) {
    return this.wishlistsService.create(createWishlistInput);
  }

  @Query(() => [Wishlist], { name: 'wishlists' })
  findAll() {
    return this.wishlistsService.findAll();
  }

  @ResolveField(() => UserEntity)
  async user(@Parent() wishlist: Wishlist) {
    return await this.wishlistsService.getUser(wishlist.userId);
  }

  @ResolveField(() => ProductEntity)
  async product(@Parent() wishlist: Wishlist) {
    console.log(wishlist);
    return await this.productsService.findOne(wishlist.productId);
  }

  @Query(() => Wishlist, { name: 'wishlist' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.wishlistsService.findOne(id);
  }

  @Mutation(() => Wishlist)
  updateWishlist(
    @Args('updateWishlistInput') updateWishlistInput: UpdateWishlistInput,
  ) {
    return this.wishlistsService.update(
      updateWishlistInput.id,
      updateWishlistInput,
    );
  }

  @Mutation(() => Wishlist)
  removeWishlist(@Args('id', { type: () => Int }) id: number) {
    return this.wishlistsService.remove(id);
  }
}
