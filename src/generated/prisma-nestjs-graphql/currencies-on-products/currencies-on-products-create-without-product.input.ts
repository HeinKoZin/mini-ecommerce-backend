import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CurrencyCreateNestedOneWithoutProductsInput } from '../currency/currency-create-nested-one-without-products.input';

@InputType()
export class CurrenciesOnProductsCreateWithoutProductInput {
  @Field(() => Float, { nullable: false })
  sell_price!: number;

  @Field(() => CurrencyCreateNestedOneWithoutProductsInput, { nullable: false })
  currency!: CurrencyCreateNestedOneWithoutProductsInput;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
