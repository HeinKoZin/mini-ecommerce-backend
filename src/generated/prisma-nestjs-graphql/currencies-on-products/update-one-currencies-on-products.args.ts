import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrenciesOnProductsUpdateInput } from './currencies-on-products-update.input';
import { CurrenciesOnProductsWhereUniqueInput } from './currencies-on-products-where-unique.input';

@ArgsType()
export class UpdateOneCurrenciesOnProductsArgs {
  @Field(() => CurrenciesOnProductsUpdateInput, { nullable: false })
  data!: CurrenciesOnProductsUpdateInput;

  @Field(() => CurrenciesOnProductsWhereUniqueInput, { nullable: false })
  where!: CurrenciesOnProductsWhereUniqueInput;
}
