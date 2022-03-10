import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrenciesOnProductsWhereInput } from './currencies-on-products-where.input';
import { CurrenciesOnProductsOrderByWithRelationInput } from './currencies-on-products-order-by-with-relation.input';
import { CurrenciesOnProductsWhereUniqueInput } from './currencies-on-products-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CurrenciesOnProductsScalarFieldEnum } from './currencies-on-products-scalar-field.enum';

@ArgsType()
export class FindFirstCurrenciesOnProductsArgs {
  @Field(() => CurrenciesOnProductsWhereInput, { nullable: true })
  where?: CurrenciesOnProductsWhereInput;

  @Field(() => [CurrenciesOnProductsOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: Array<CurrenciesOnProductsOrderByWithRelationInput>;

  @Field(() => CurrenciesOnProductsWhereUniqueInput, { nullable: true })
  cursor?: CurrenciesOnProductsWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [CurrenciesOnProductsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CurrenciesOnProductsScalarFieldEnum>;
}
