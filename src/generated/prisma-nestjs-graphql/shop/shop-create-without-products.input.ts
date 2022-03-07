import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnShopsCreateNestedManyWithoutShopInput } from '../users-on-shops/users-on-shops-create-nested-many-without-shop.input';

@InputType()
export class ShopCreateWithoutProductsInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  slug!: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => String, { nullable: false })
  phone!: string;

  @Field(() => UsersOnShopsCreateNestedManyWithoutShopInput, { nullable: true })
  owners?: UsersOnShopsCreateNestedManyWithoutShopInput;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
