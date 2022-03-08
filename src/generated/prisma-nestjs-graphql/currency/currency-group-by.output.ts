import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CurrencyCountAggregate } from './currency-count-aggregate.output';
import { CurrencyAvgAggregate } from './currency-avg-aggregate.output';
import { CurrencySumAggregate } from './currency-sum-aggregate.output';
import { CurrencyMinAggregate } from './currency-min-aggregate.output';
import { CurrencyMaxAggregate } from './currency-max-aggregate.output';

@ObjectType()
export class CurrencyGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => CurrencyCountAggregate, {nullable:true})
    _count?: CurrencyCountAggregate;

    @Field(() => CurrencyAvgAggregate, {nullable:true})
    _avg?: CurrencyAvgAggregate;

    @Field(() => CurrencySumAggregate, {nullable:true})
    _sum?: CurrencySumAggregate;

    @Field(() => CurrencyMinAggregate, {nullable:true})
    _min?: CurrencyMinAggregate;

    @Field(() => CurrencyMaxAggregate, {nullable:true})
    _max?: CurrencyMaxAggregate;
}
