import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrenciesOnProductsCreateWithoutCurrencyInput } from './currencies-on-products-create-without-currency.input';
import { CurrenciesOnProductsCreateOrConnectWithoutCurrencyInput } from './currencies-on-products-create-or-connect-without-currency.input';
import { CurrenciesOnProductsUpsertWithWhereUniqueWithoutCurrencyInput } from './currencies-on-products-upsert-with-where-unique-without-currency.input';
import { CurrenciesOnProductsCreateManyCurrencyInputEnvelope } from './currencies-on-products-create-many-currency-input-envelope.input';
import { CurrenciesOnProductsWhereUniqueInput } from './currencies-on-products-where-unique.input';
import { CurrenciesOnProductsUpdateWithWhereUniqueWithoutCurrencyInput } from './currencies-on-products-update-with-where-unique-without-currency.input';
import { CurrenciesOnProductsUpdateManyWithWhereWithoutCurrencyInput } from './currencies-on-products-update-many-with-where-without-currency.input';
import { CurrenciesOnProductsScalarWhereInput } from './currencies-on-products-scalar-where.input';

@InputType()
export class CurrenciesOnProductsUpdateManyWithoutCurrencyInput {
  @Field(() => [CurrenciesOnProductsCreateWithoutCurrencyInput], {
    nullable: true,
  })
  create?: Array<CurrenciesOnProductsCreateWithoutCurrencyInput>;

  @Field(() => [CurrenciesOnProductsCreateOrConnectWithoutCurrencyInput], {
    nullable: true,
  })
  connectOrCreate?: Array<CurrenciesOnProductsCreateOrConnectWithoutCurrencyInput>;

  @Field(
    () => [CurrenciesOnProductsUpsertWithWhereUniqueWithoutCurrencyInput],
    { nullable: true },
  )
  upsert?: Array<CurrenciesOnProductsUpsertWithWhereUniqueWithoutCurrencyInput>;

  @Field(() => CurrenciesOnProductsCreateManyCurrencyInputEnvelope, {
    nullable: true,
  })
  createMany?: CurrenciesOnProductsCreateManyCurrencyInputEnvelope;

  @Field(() => [CurrenciesOnProductsWhereUniqueInput], { nullable: true })
  set?: Array<CurrenciesOnProductsWhereUniqueInput>;

  @Field(() => [CurrenciesOnProductsWhereUniqueInput], { nullable: true })
  disconnect?: Array<CurrenciesOnProductsWhereUniqueInput>;

  @Field(() => [CurrenciesOnProductsWhereUniqueInput], { nullable: true })
  delete?: Array<CurrenciesOnProductsWhereUniqueInput>;

  @Field(() => [CurrenciesOnProductsWhereUniqueInput], { nullable: true })
  connect?: Array<CurrenciesOnProductsWhereUniqueInput>;

  @Field(
    () => [CurrenciesOnProductsUpdateWithWhereUniqueWithoutCurrencyInput],
    { nullable: true },
  )
  update?: Array<CurrenciesOnProductsUpdateWithWhereUniqueWithoutCurrencyInput>;

  @Field(() => [CurrenciesOnProductsUpdateManyWithWhereWithoutCurrencyInput], {
    nullable: true,
  })
  updateMany?: Array<CurrenciesOnProductsUpdateManyWithWhereWithoutCurrencyInput>;

  @Field(() => [CurrenciesOnProductsScalarWhereInput], { nullable: true })
  deleteMany?: Array<CurrenciesOnProductsScalarWhereInput>;
}
