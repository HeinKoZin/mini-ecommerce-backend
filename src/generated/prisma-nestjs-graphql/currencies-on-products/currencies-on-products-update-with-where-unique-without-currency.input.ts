import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrenciesOnProductsWhereUniqueInput } from './currencies-on-products-where-unique.input';
import { CurrenciesOnProductsUpdateWithoutCurrencyInput } from './currencies-on-products-update-without-currency.input';

@InputType()
export class CurrenciesOnProductsUpdateWithWhereUniqueWithoutCurrencyInput {
  @Field(() => CurrenciesOnProductsWhereUniqueInput, { nullable: false })
  where!: CurrenciesOnProductsWhereUniqueInput;

  @Field(() => CurrenciesOnProductsUpdateWithoutCurrencyInput, {
    nullable: false,
  })
  data!: CurrenciesOnProductsUpdateWithoutCurrencyInput;
}
