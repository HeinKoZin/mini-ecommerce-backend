import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnShopsWhereUniqueInput } from './users-on-shops-where-unique.input';
import { UsersOnShopsUpdateWithoutShopInput } from './users-on-shops-update-without-shop.input';
import { UsersOnShopsCreateWithoutShopInput } from './users-on-shops-create-without-shop.input';

@InputType()
export class UsersOnShopsUpsertWithWhereUniqueWithoutShopInput {
  @Field(() => UsersOnShopsWhereUniqueInput, { nullable: false })
  where!: UsersOnShopsWhereUniqueInput;

  @Field(() => UsersOnShopsUpdateWithoutShopInput, { nullable: false })
  update!: UsersOnShopsUpdateWithoutShopInput;

  @Field(() => UsersOnShopsCreateWithoutShopInput, { nullable: false })
  create!: UsersOnShopsCreateWithoutShopInput;
}
