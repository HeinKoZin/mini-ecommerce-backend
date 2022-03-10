import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class CurrenciesOnProductsUncheckedCreateWithoutCurrencyInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Float, { nullable: false })
  sell_price!: number;

  @Field(() => Int, { nullable: false })
  productId!: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
