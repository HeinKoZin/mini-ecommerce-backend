import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CurrenciesOnProducts } from '../currencies-on-products/currencies-on-products.model';
import { CurrencyCount } from './currency-count.output';

@ObjectType()
export class Currency {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => [CurrenciesOnProducts], { nullable: true })
  products?: Array<CurrenciesOnProducts>;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => CurrencyCount, { nullable: false })
  _count?: CurrencyCount;
}
