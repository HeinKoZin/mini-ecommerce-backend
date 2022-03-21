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
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@auth/jwt-auth.guard';

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly wishlistService: WishlistsService,
  ) {}

  @Mutation(() => UserEntity)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.usersService.create(createUserInput);
  }

  @Query(() => [UserEntity], { name: 'users' })
  @UseGuards(JwtAuthGuard)
  async findAll(
    @Args('take', { type: () => Int, nullable: true }) take?: number,
  ) {
    return await this.usersService.findAll(take);
  }

  // @ResolveField(() => UserType)
  // async role(@Parent() user: UserEntity) {
  //   return await user.role;
  // }

  @ResolveField(() => [ShopEntity])
  async shops(
    @Parent() user: UserEntity,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
  ) {
    return await this.usersService.getShops(user.id, take);
  }

  @ResolveField(() => [Wishlist])
  async wishlists(@Parent() user: UserEntity) {
    return await this.wishlistService.findAll(user.id);
  }

  @Query(() => UserEntity, { name: 'user' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.usersService.findOne(id);
  }

  @Mutation(() => UserEntity)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return await this.usersService.update(updateUserInput);
  }

  @Mutation(() => UserEntity)
  async removeUser(@Args('id', { type: () => Int }) id: number) {
    return await this.usersService.remove(id);
  }
}
