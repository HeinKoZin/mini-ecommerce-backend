import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersOnShopsWhereInput } from './users-on-shops-where.input';
import { UsersOnShopsOrderByWithAggregationInput } from './users-on-shops-order-by-with-aggregation.input';
import { UsersOnShopsScalarFieldEnum } from './users-on-shops-scalar-field.enum';
import { UsersOnShopsScalarWhereWithAggregatesInput } from './users-on-shops-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UsersOnShopsCountAggregateInput } from './users-on-shops-count-aggregate.input';
import { UsersOnShopsAvgAggregateInput } from './users-on-shops-avg-aggregate.input';
import { UsersOnShopsSumAggregateInput } from './users-on-shops-sum-aggregate.input';
import { UsersOnShopsMinAggregateInput } from './users-on-shops-min-aggregate.input';
import { UsersOnShopsMaxAggregateInput } from './users-on-shops-max-aggregate.input';

@ArgsType()
export class UsersOnShopsGroupByArgs {
  @Field(() => UsersOnShopsWhereInput, { nullable: true })
  where?: UsersOnShopsWhereInput;

  @Field(() => [UsersOnShopsOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<UsersOnShopsOrderByWithAggregationInput>;

  @Field(() => [UsersOnShopsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof UsersOnShopsScalarFieldEnum>;

  @Field(() => UsersOnShopsScalarWhereWithAggregatesInput, { nullable: true })
  having?: UsersOnShopsScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => UsersOnShopsCountAggregateInput, { nullable: true })
  _count?: UsersOnShopsCountAggregateInput;

  @Field(() => UsersOnShopsAvgAggregateInput, { nullable: true })
  _avg?: UsersOnShopsAvgAggregateInput;

  @Field(() => UsersOnShopsSumAggregateInput, { nullable: true })
  _sum?: UsersOnShopsSumAggregateInput;

  @Field(() => UsersOnShopsMinAggregateInput, { nullable: true })
  _min?: UsersOnShopsMinAggregateInput;

  @Field(() => UsersOnShopsMaxAggregateInput, { nullable: true })
  _max?: UsersOnShopsMaxAggregateInput;
}
