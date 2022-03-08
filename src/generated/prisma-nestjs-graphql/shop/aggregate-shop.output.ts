import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShopCountAggregate } from './shop-count-aggregate.output';
import { ShopAvgAggregate } from './shop-avg-aggregate.output';
import { ShopSumAggregate } from './shop-sum-aggregate.output';
import { ShopMinAggregate } from './shop-min-aggregate.output';
import { ShopMaxAggregate } from './shop-max-aggregate.output';

@ObjectType()
export class AggregateShop {

    @Field(() => ShopCountAggregate, {nullable:true})
    _count?: ShopCountAggregate;

    @Field(() => ShopAvgAggregate, {nullable:true})
    _avg?: ShopAvgAggregate;

    @Field(() => ShopSumAggregate, {nullable:true})
    _sum?: ShopSumAggregate;

    @Field(() => ShopMinAggregate, {nullable:true})
    _min?: ShopMinAggregate;

    @Field(() => ShopMaxAggregate, {nullable:true})
    _max?: ShopMaxAggregate;
}
