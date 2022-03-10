import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { Currency } from '../currency/currency.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CurrenciesOnProducts {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => Float, { nullable: false })
  sell_price!: number;

  @Field(() => Product, { nullable: false })
  product?: Product;

  @Field(() => Currency, { nullable: false })
  currency?: Currency;

  @Field(() => Int, { nullable: false })
  productId!: number;

  @Field(() => Int, { nullable: false })
  currencyId!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
