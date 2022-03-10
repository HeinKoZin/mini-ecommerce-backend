import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrenciesOnProductsWhereUniqueInput } from './currencies-on-products-where-unique.input';

@ArgsType()
export class FindUniqueCurrenciesOnProductsArgs {
  @Field(() => CurrenciesOnProductsWhereUniqueInput, { nullable: false })
  where!: CurrenciesOnProductsWhereUniqueInput;
}
