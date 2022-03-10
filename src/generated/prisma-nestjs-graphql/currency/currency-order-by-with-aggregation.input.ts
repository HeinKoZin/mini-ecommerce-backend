import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CurrencyCountOrderByAggregateInput } from './currency-count-order-by-aggregate.input';
import { CurrencyAvgOrderByAggregateInput } from './currency-avg-order-by-aggregate.input';
import { CurrencyMaxOrderByAggregateInput } from './currency-max-order-by-aggregate.input';
import { CurrencyMinOrderByAggregateInput } from './currency-min-order-by-aggregate.input';
import { CurrencySumOrderByAggregateInput } from './currency-sum-order-by-aggregate.input';

@InputType()
export class CurrencyOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  code?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => CurrencyCountOrderByAggregateInput, { nullable: true })
  _count?: CurrencyCountOrderByAggregateInput;

  @Field(() => CurrencyAvgOrderByAggregateInput, { nullable: true })
  _avg?: CurrencyAvgOrderByAggregateInput;

  @Field(() => CurrencyMaxOrderByAggregateInput, { nullable: true })
  _max?: CurrencyMaxOrderByAggregateInput;

  @Field(() => CurrencyMinOrderByAggregateInput, { nullable: true })
  _min?: CurrencyMinOrderByAggregateInput;

  @Field(() => CurrencySumOrderByAggregateInput, { nullable: true })
  _sum?: CurrencySumOrderByAggregateInput;
}
