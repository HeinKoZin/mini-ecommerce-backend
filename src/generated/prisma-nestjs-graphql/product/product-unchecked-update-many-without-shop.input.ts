import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutShopInput } from './product-create-without-shop.input';
import { ProductCreateOrConnectWithoutShopInput } from './product-create-or-connect-without-shop.input';
import { ProductUpsertWithWhereUniqueWithoutShopInput } from './product-upsert-with-where-unique-without-shop.input';
import { ProductCreateManyShopInputEnvelope } from './product-create-many-shop-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutShopInput } from './product-update-with-where-unique-without-shop.input';
import { ProductUpdateManyWithWhereWithoutShopInput } from './product-update-many-with-where-without-shop.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutShopInput {
  @Field(() => [ProductCreateWithoutShopInput], { nullable: true })
  create?: Array<ProductCreateWithoutShopInput>;

  @Field(() => [ProductCreateOrConnectWithoutShopInput], { nullable: true })
  connectOrCreate?: Array<ProductCreateOrConnectWithoutShopInput>;

  @Field(() => [ProductUpsertWithWhereUniqueWithoutShopInput], {
    nullable: true,
  })
  upsert?: Array<ProductUpsertWithWhereUniqueWithoutShopInput>;

  @Field(() => ProductCreateManyShopInputEnvelope, { nullable: true })
  createMany?: ProductCreateManyShopInputEnvelope;

  @Field(() => [ProductWhereUniqueInput], { nullable: true })
  set?: Array<ProductWhereUniqueInput>;

  @Field(() => [ProductWhereUniqueInput], { nullable: true })
  disconnect?: Array<ProductWhereUniqueInput>;

  @Field(() => [ProductWhereUniqueInput], { nullable: true })
  delete?: Array<ProductWhereUniqueInput>;

  @Field(() => [ProductWhereUniqueInput], { nullable: true })
  connect?: Array<ProductWhereUniqueInput>;

  @Field(() => [ProductUpdateWithWhereUniqueWithoutShopInput], {
    nullable: true,
  })
  update?: Array<ProductUpdateWithWhereUniqueWithoutShopInput>;

  @Field(() => [ProductUpdateManyWithWhereWithoutShopInput], { nullable: true })
  updateMany?: Array<ProductUpdateManyWithWhereWithoutShopInput>;

  @Field(() => [ProductScalarWhereInput], { nullable: true })
  deleteMany?: Array<ProductScalarWhereInput>;
}
