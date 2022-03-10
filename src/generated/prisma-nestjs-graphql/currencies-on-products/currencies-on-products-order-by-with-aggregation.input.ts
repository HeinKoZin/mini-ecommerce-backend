import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CurrenciesOnProductsCountOrderByAggregateInput } from './currencies-on-products-count-order-by-aggregate.input';
import { CurrenciesOnProductsAvgOrderByAggregateInput } from './currencies-on-products-avg-order-by-aggregate.input';
import { CurrenciesOnProductsMaxOrderByAggregateInput } from './currencies-on-products-max-order-by-aggregate.input';
import { CurrenciesOnProductsMinOrderByAggregateInput } from './currencies-on-products-min-order-by-aggregate.input';
import { CurrenciesOnProductsSumOrderByAggregateInput } from './currencies-on-products-sum-order-by-aggregate.input';

@InputType()
export class CurrenciesOnProductsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sell_price?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  productId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  currencyId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => CurrenciesOnProductsCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: CurrenciesOnProductsCountOrderByAggregateInput;

  @Field(() => CurrenciesOnProductsAvgOrderByAggregateInput, { nullable: true })
  _avg?: CurrenciesOnProductsAvgOrderByAggregateInput;

  @Field(() => CurrenciesOnProductsMaxOrderByAggregateInput, { nullable: true })
  _max?: CurrenciesOnProductsMaxOrderByAggregateInput;

  @Field(() => CurrenciesOnProductsMinOrderByAggregateInput, { nullable: true })
  _min?: CurrenciesOnProductsMinOrderByAggregateInput;

  @Field(() => CurrenciesOnProductsSumOrderByAggregateInput, { nullable: true })
  _sum?: CurrenciesOnProductsSumOrderByAggregateInput;
}
