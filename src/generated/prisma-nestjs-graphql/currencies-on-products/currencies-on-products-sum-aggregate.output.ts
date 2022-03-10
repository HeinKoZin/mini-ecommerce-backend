import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CurrenciesOnProductsSumAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Float, { nullable: true })
  sell_price?: number;

  @Field(() => Int, { nullable: true })
  productId?: number;

  @Field(() => Int, { nullable: true })
  currencyId?: number;
}
