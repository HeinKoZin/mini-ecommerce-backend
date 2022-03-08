import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrenciesOnProductsWhereInput } from './currencies-on-products-where.input';
import { CurrenciesOnProductsOrderByWithRelationInput } from './currencies-on-products-order-by-with-relation.input';
import { CurrenciesOnProductsWhereUniqueInput } from './currencies-on-products-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CurrenciesOnProductsCountAggregateInput } from './currencies-on-products-count-aggregate.input';
import { CurrenciesOnProductsAvgAggregateInput } from './currencies-on-products-avg-aggregate.input';
import { CurrenciesOnProductsSumAggregateInput } from './currencies-on-products-sum-aggregate.input';
import { CurrenciesOnProductsMinAggregateInput } from './currencies-on-products-min-aggregate.input';
import { CurrenciesOnProductsMaxAggregateInput } from './currencies-on-products-max-aggregate.input';

@ArgsType()
export class CurrenciesOnProductsAggregateArgs {

    @Field(() => CurrenciesOnProductsWhereInput, {nullable:true})
    where?: CurrenciesOnProductsWhereInput;

    @Field(() => [CurrenciesOnProductsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CurrenciesOnProductsOrderByWithRelationInput>;

    @Field(() => CurrenciesOnProductsWhereUniqueInput, {nullable:true})
    cursor?: CurrenciesOnProductsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CurrenciesOnProductsCountAggregateInput, {nullable:true})
    _count?: CurrenciesOnProductsCountAggregateInput;

    @Field(() => CurrenciesOnProductsAvgAggregateInput, {nullable:true})
    _avg?: CurrenciesOnProductsAvgAggregateInput;

    @Field(() => CurrenciesOnProductsSumAggregateInput, {nullable:true})
    _sum?: CurrenciesOnProductsSumAggregateInput;

    @Field(() => CurrenciesOnProductsMinAggregateInput, {nullable:true})
    _min?: CurrenciesOnProductsMinAggregateInput;

    @Field(() => CurrenciesOnProductsMaxAggregateInput, {nullable:true})
    _max?: CurrenciesOnProductsMaxAggregateInput;
}
