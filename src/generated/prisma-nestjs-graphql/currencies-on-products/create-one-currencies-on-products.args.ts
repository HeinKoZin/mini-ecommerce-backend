import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrenciesOnProductsCreateInput } from './currencies-on-products-create.input';

@ArgsType()
export class CreateOneCurrenciesOnProductsArgs {
  @Field(() => CurrenciesOnProductsCreateInput, { nullable: false })
  data!: CurrenciesOnProductsCreateInput;
}
