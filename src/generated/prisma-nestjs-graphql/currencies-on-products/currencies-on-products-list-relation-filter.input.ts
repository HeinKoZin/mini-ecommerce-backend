import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrenciesOnProductsWhereInput } from './currencies-on-products-where.input';

@InputType()
export class CurrenciesOnProductsListRelationFilter {
  @Field(() => CurrenciesOnProductsWhereInput, { nullable: true })
  every?: CurrenciesOnProductsWhereInput;

  @Field(() => CurrenciesOnProductsWhereInput, { nullable: true })
  some?: CurrenciesOnProductsWhereInput;

  @Field(() => CurrenciesOnProductsWhereInput, { nullable: true })
  none?: CurrenciesOnProductsWhereInput;
}
