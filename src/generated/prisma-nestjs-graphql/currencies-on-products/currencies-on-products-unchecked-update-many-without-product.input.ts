import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrenciesOnProductsCreateWithoutProductInput } from './currencies-on-products-create-without-product.input';
import { CurrenciesOnProductsCreateOrConnectWithoutProductInput } from './currencies-on-products-create-or-connect-without-product.input';
import { CurrenciesOnProductsUpsertWithWhereUniqueWithoutProductInput } from './currencies-on-products-upsert-with-where-unique-without-product.input';
import { CurrenciesOnProductsCreateManyProductInputEnvelope } from './currencies-on-products-create-many-product-input-envelope.input';
import { CurrenciesOnProductsWhereUniqueInput } from './currencies-on-products-where-unique.input';
import { CurrenciesOnProductsUpdateWithWhereUniqueWithoutProductInput } from './currencies-on-products-update-with-where-unique-without-product.input';
import { CurrenciesOnProductsUpdateManyWithWhereWithoutProductInput } from './currencies-on-products-update-many-with-where-without-product.input';
import { CurrenciesOnProductsScalarWhereInput } from './currencies-on-products-scalar-where.input';

@InputType()
export class CurrenciesOnProductsUncheckedUpdateManyWithoutProductInput {
  @Field(() => [CurrenciesOnProductsCreateWithoutProductInput], {
    nullable: true,
  })
  create?: Array<CurrenciesOnProductsCreateWithoutProductInput>;

  @Field(() => [CurrenciesOnProductsCreateOrConnectWithoutProductInput], {
    nullable: true,
  })
  connectOrCreate?: Array<CurrenciesOnProductsCreateOrConnectWithoutProductInput>;

  @Field(() => [CurrenciesOnProductsUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true,
  })
  upsert?: Array<CurrenciesOnProductsUpsertWithWhereUniqueWithoutProductInput>;

  @Field(() => CurrenciesOnProductsCreateManyProductInputEnvelope, {
    nullable: true,
  })
  createMany?: CurrenciesOnProductsCreateManyProductInputEnvelope;

  @Field(() => [CurrenciesOnProductsWhereUniqueInput], { nullable: true })
  set?: Array<CurrenciesOnProductsWhereUniqueInput>;

  @Field(() => [CurrenciesOnProductsWhereUniqueInput], { nullable: true })
  disconnect?: Array<CurrenciesOnProductsWhereUniqueInput>;

  @Field(() => [CurrenciesOnProductsWhereUniqueInput], { nullable: true })
  delete?: Array<CurrenciesOnProductsWhereUniqueInput>;

  @Field(() => [CurrenciesOnProductsWhereUniqueInput], { nullable: true })
  connect?: Array<CurrenciesOnProductsWhereUniqueInput>;

  @Field(() => [CurrenciesOnProductsUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true,
  })
  update?: Array<CurrenciesOnProductsUpdateWithWhereUniqueWithoutProductInput>;

  @Field(() => [CurrenciesOnProductsUpdateManyWithWhereWithoutProductInput], {
    nullable: true,
  })
  updateMany?: Array<CurrenciesOnProductsUpdateManyWithWhereWithoutProductInput>;

  @Field(() => [CurrenciesOnProductsScalarWhereInput], { nullable: true })
  deleteMany?: Array<CurrenciesOnProductsScalarWhereInput>;
}
