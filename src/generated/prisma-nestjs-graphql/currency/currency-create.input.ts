import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrenciesOnProductsCreateNestedManyWithoutCurrencyInput } from '../currencies-on-products/currencies-on-products-create-nested-many-without-currency.input';

@InputType()
export class CurrencyCreateInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => CurrenciesOnProductsCreateNestedManyWithoutCurrencyInput, {
    nullable: true,
  })
  products?: CurrenciesOnProductsCreateNestedManyWithoutCurrencyInput;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
