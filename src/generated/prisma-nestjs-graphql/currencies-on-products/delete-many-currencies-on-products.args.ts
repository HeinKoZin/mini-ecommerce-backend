import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrenciesOnProductsWhereInput } from './currencies-on-products-where.input';

@ArgsType()
export class DeleteManyCurrenciesOnProductsArgs {
  @Field(() => CurrenciesOnProductsWhereInput, { nullable: true })
  where?: CurrenciesOnProductsWhereInput;
}
