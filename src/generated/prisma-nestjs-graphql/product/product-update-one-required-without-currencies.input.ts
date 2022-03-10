import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCurrenciesInput } from './product-create-without-currencies.input';
import { ProductCreateOrConnectWithoutCurrenciesInput } from './product-create-or-connect-without-currencies.input';
import { ProductUpsertWithoutCurrenciesInput } from './product-upsert-without-currencies.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutCurrenciesInput } from './product-update-without-currencies.input';

@InputType()
export class ProductUpdateOneRequiredWithoutCurrenciesInput {
  @Field(() => ProductCreateWithoutCurrenciesInput, { nullable: true })
  create?: ProductCreateWithoutCurrenciesInput;

  @Field(() => ProductCreateOrConnectWithoutCurrenciesInput, { nullable: true })
  connectOrCreate?: ProductCreateOrConnectWithoutCurrenciesInput;

  @Field(() => ProductUpsertWithoutCurrenciesInput, { nullable: true })
  upsert?: ProductUpsertWithoutCurrenciesInput;

  @Field(() => ProductWhereUniqueInput, { nullable: true })
  connect?: ProductWhereUniqueInput;

  @Field(() => ProductUpdateWithoutCurrenciesInput, { nullable: true })
  update?: ProductUpdateWithoutCurrenciesInput;
}
