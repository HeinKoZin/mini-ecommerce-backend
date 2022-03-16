import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { UserType } from '@generated/prisma-nestjs-graphql/prisma/user-type.enum';
// import { Shop } from '@generated/prisma-nestjs-graphql/shop/shop.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ShopEntity } from '@shops/entities/shop.entity';
import { Wishlist } from '@wishlists/entities/wishlist.entity';
import { WishlistsService } from '@wishlists/wishlists.service';

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly wishlistService: WishlistsService,
  ) {}

  @Mutation(() => UserEntity)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [UserEntity], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @ResolveField(() => UserType)
  async role(@Parent() user: UserEntity) {
    return await user.role;
  }

  @ResolveField(() => [ShopEntity])
  async shops(@Parent() user: UserEntity) {
    return await this.usersService.getShops(user.id);
  }

  @ResolveField(() => [Wishlist])
  async wishlists(@Parent() user: UserEntity) {
    return await this.wishlistService.findAll(user.id);
  }

  @Query(() => UserEntity, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => UserEntity)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput);
  }

  @Mutation(() => UserEntity)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
