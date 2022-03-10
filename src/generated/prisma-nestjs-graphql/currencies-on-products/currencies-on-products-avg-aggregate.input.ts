import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CurrenciesOnProductsAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  sell_price?: true;

  @Field(() => Boolean, { nullable: true })
  productId?: true;

  @Field(() => Boolean, { nullable: true })
  currencyId?: true;
}
