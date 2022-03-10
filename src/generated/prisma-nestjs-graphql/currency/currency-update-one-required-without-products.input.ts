import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateWithoutProductsInput } from './currency-create-without-products.input';
import { CurrencyCreateOrConnectWithoutProductsInput } from './currency-create-or-connect-without-products.input';
import { CurrencyUpsertWithoutProductsInput } from './currency-upsert-without-products.input';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { CurrencyUpdateWithoutProductsInput } from './currency-update-without-products.input';

@InputType()
export class CurrencyUpdateOneRequiredWithoutProductsInput {
  @Field(() => CurrencyCreateWithoutProductsInput, { nullable: true })
  create?: CurrencyCreateWithoutProductsInput;

  @Field(() => CurrencyCreateOrConnectWithoutProductsInput, { nullable: true })
  connectOrCreate?: CurrencyCreateOrConnectWithoutProductsInput;

  @Field(() => CurrencyUpsertWithoutProductsInput, { nullable: true })
  upsert?: CurrencyUpsertWithoutProductsInput;

  @Field(() => CurrencyWhereUniqueInput, { nullable: true })
  connect?: CurrencyWhereUniqueInput;

  @Field(() => CurrencyUpdateWithoutProductsInput, { nullable: true })
  update?: CurrencyUpdateWithoutProductsInput;
}
