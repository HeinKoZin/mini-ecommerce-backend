import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CurrenciesOnProductsCountAggregate } from './currencies-on-products-count-aggregate.output';
import { CurrenciesOnProductsAvgAggregate } from './currencies-on-products-avg-aggregate.output';
import { CurrenciesOnProductsSumAggregate } from './currencies-on-products-sum-aggregate.output';
import { CurrenciesOnProductsMinAggregate } from './currencies-on-products-min-aggregate.output';
import { CurrenciesOnProductsMaxAggregate } from './currencies-on-products-max-aggregate.output';

@ObjectType()
export class CurrenciesOnProductsGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Float, { nullable: false })
  sell_price!: number;

  @Field(() => Int, { nullable: false })
  productId!: number;

  @Field(() => Int, { nullable: false })
  currencyId!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

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
