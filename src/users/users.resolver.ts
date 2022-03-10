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
import { Shop } from '@generated/prisma-nestjs-graphql/shop/shop.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

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

  @ResolveField(() => [Shop])
  async shops(@Parent() user: UserEntity) {
    return await this.usersService.getShops(user.id);
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
