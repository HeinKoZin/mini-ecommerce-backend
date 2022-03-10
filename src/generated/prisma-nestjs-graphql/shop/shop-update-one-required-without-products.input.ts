import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShopCreateWithoutProductsInput } from './shop-create-without-products.input';
import { ShopCreateOrConnectWithoutProductsInput } from './shop-create-or-connect-without-products.input';
import { ShopUpsertWithoutProductsInput } from './shop-upsert-without-products.input';
import { ShopWhereUniqueInput } from './shop-where-unique.input';
import { ShopUpdateWithoutProductsInput } from './shop-update-without-products.input';

@InputType()
export class ShopUpdateOneRequiredWithoutProductsInput {
  @Field(() => ShopCreateWithoutProductsInput, { nullable: true })
  create?: ShopCreateWithoutProductsInput;

  @Field(() => ShopCreateOrConnectWithoutProductsInput, { nullable: true })
  connectOrCreate?: ShopCreateOrConnectWithoutProductsInput;

  @Field(() => ShopUpsertWithoutProductsInput, { nullable: true })
  upsert?: ShopUpsertWithoutProductsInput;

  @Field(() => ShopWhereUniqueInput, { nullable: true })
  connect?: ShopWhereUniqueInput;

  @Field(() => ShopUpdateWithoutProductsInput, { nullable: true })
  update?: ShopUpdateWithoutProductsInput;
}
