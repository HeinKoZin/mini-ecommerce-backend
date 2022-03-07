import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnShopsWhereUniqueInput } from './users-on-shops-where-unique.input';
import { UsersOnShopsUpdateWithoutShopInput } from './users-on-shops-update-without-shop.input';

@InputType()
export class UsersOnShopsUpdateWithWhereUniqueWithoutShopInput {
  @Field(() => UsersOnShopsWhereUniqueInput, { nullable: false })
  where!: UsersOnShopsWhereUniqueInput;

  @Field(() => UsersOnShopsUpdateWithoutShopInput, { nullable: false })
  data!: UsersOnShopsUpdateWithoutShopInput;
}
