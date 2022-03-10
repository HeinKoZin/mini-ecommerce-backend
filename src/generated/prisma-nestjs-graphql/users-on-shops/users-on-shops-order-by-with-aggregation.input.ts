import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UsersOnShopsCountOrderByAggregateInput } from './users-on-shops-count-order-by-aggregate.input';
import { UsersOnShopsAvgOrderByAggregateInput } from './users-on-shops-avg-order-by-aggregate.input';
import { UsersOnShopsMaxOrderByAggregateInput } from './users-on-shops-max-order-by-aggregate.input';
import { UsersOnShopsMinOrderByAggregateInput } from './users-on-shops-min-order-by-aggregate.input';
import { UsersOnShopsSumOrderByAggregateInput } from './users-on-shops-sum-order-by-aggregate.input';

@InputType()
export class UsersOnShopsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  shopId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  assignedby?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => UsersOnShopsCountOrderByAggregateInput, { nullable: true })
  _count?: UsersOnShopsCountOrderByAggregateInput;

  @Field(() => UsersOnShopsAvgOrderByAggregateInput, { nullable: true })
  _avg?: UsersOnShopsAvgOrderByAggregateInput;

  @Field(() => UsersOnShopsMaxOrderByAggregateInput, { nullable: true })
  _max?: UsersOnShopsMaxOrderByAggregateInput;

  @Field(() => UsersOnShopsMinOrderByAggregateInput, { nullable: true })
  _min?: UsersOnShopsMinOrderByAggregateInput;

  @Field(() => UsersOnShopsSumOrderByAggregateInput, { nullable: true })
  _sum?: UsersOnShopsSumOrderByAggregateInput;
}
