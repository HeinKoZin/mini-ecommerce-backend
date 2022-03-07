import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopWhereInput } from './shop-where.input';
import { ShopOrderByWithRelationInput } from './shop-order-by-with-relation.input';
import { ShopWhereUniqueInput } from './shop-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShopCountAggregateInput } from './shop-count-aggregate.input';
import { ShopAvgAggregateInput } from './shop-avg-aggregate.input';
import { ShopSumAggregateInput } from './shop-sum-aggregate.input';
import { ShopMinAggregateInput } from './shop-min-aggregate.input';
import { ShopMaxAggregateInput } from './shop-max-aggregate.input';

@ArgsType()
export class ShopAggregateArgs {
  @Field(() => ShopWhereInput, { nullable: true })
  where?: ShopWhereInput;

  @Field(() => [ShopOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ShopOrderByWithRelationInput>;

  @Field(() => ShopWhereUniqueInput, { nullable: true })
  cursor?: ShopWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ShopCountAggregateInput, { nullable: true })
  _count?: ShopCountAggregateInput;

  @Field(() => ShopAvgAggregateInput, { nullable: true })
  _avg?: ShopAvgAggregateInput;

  @Field(() => ShopSumAggregateInput, { nullable: true })
  _sum?: ShopSumAggregateInput;

  @Field(() => ShopMinAggregateInput, { nullable: true })
  _min?: ShopMinAggregateInput;

  @Field(() => ShopMaxAggregateInput, { nullable: true })
  _max?: ShopMaxAggregateInput;
}
