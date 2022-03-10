import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CurrenciesOnProductsCountAggregate } from './currencies-on-products-count-aggregate.output';
import { CurrenciesOnProductsAvgAggregate } from './currencies-on-products-avg-aggregate.output';
import { CurrenciesOnProductsSumAggregate } from './currencies-on-products-sum-aggregate.output';
import { CurrenciesOnProductsMinAggregate } from './currencies-on-products-min-aggregate.output';
import { CurrenciesOnProductsMaxAggregate } from './currencies-on-products-max-aggregate.output';

@ObjectType()
export class AggregateCurrenciesOnProducts {
  @Field(() => CurrenciesOnProductsCountAggregate, { nullable: true })
  _count?: CurrenciesOnProductsCountAggregate;

  @Field(() => CurrenciesOnProductsAvgAggregate, { nullable: true })
  _avg?: CurrenciesOnProductsAvgAggregate;

  @Field(() => CurrenciesOnProductsSumAggregate, { nullable: true })
  _sum?: CurrenciesOnProductsSumAggregate;

  @Field(() => CurrenciesOnProductsMinAggregate, { nullable: true })
  _min?: CurrenciesOnProductsMinAggregate;

  @Field(() => CurrenciesOnProductsMaxAggregate, { nullable: true })
  _max?: CurrenciesOnProductsMaxAggregate;
}
