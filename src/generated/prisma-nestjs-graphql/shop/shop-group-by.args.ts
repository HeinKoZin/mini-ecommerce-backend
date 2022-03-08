import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopWhereInput } from './shop-where.input';
import { ShopOrderByWithAggregationInput } from './shop-order-by-with-aggregation.input';
import { ShopScalarFieldEnum } from './shop-scalar-field.enum';
import { ShopScalarWhereWithAggregatesInput } from './shop-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ShopCountAggregateInput } from './shop-count-aggregate.input';
import { ShopAvgAggregateInput } from './shop-avg-aggregate.input';
import { ShopSumAggregateInput } from './shop-sum-aggregate.input';
import { ShopMinAggregateInput } from './shop-min-aggregate.input';
import { ShopMaxAggregateInput } from './shop-max-aggregate.input';

@ArgsType()
export class ShopGroupByArgs {

    @Field(() => ShopWhereInput, {nullable:true})
    where?: ShopWhereInput;

    @Field(() => [ShopOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ShopOrderByWithAggregationInput>;

    @Field(() => [ShopScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ShopScalarFieldEnum>;

    @Field(() => ShopScalarWhereWithAggregatesInput, {nullable:true})
    having?: ShopScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShopCountAggregateInput, {nullable:true})
    _count?: ShopCountAggregateInput;

    @Field(() => ShopAvgAggregateInput, {nullable:true})
    _avg?: ShopAvgAggregateInput;

    @Field(() => ShopSumAggregateInput, {nullable:true})
    _sum?: ShopSumAggregateInput;

    @Field(() => ShopMinAggregateInput, {nullable:true})
    _min?: ShopMinAggregateInput;

    @Field(() => ShopMaxAggregateInput, {nullable:true})
    _max?: ShopMaxAggregateInput;
}
