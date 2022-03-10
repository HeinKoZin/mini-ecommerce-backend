import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShopUpdateWithoutProductsInput } from './shop-update-without-products.input';
import { ShopCreateWithoutProductsInput } from './shop-create-without-products.input';

@InputType()
export class ShopUpsertWithoutProductsInput {
  @Field(() => ShopUpdateWithoutProductsInput, { nullable: false })
  update!: ShopUpdateWithoutProductsInput;

  @Field(() => ShopCreateWithoutProductsInput, { nullable: false })
  create!: ShopCreateWithoutProductsInput;
}
