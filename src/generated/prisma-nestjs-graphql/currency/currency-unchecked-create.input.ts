import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CurrenciesOnProductsUncheckedCreateNestedManyWithoutCurrencyInput } from '../currencies-on-products/currencies-on-products-unchecked-create-nested-many-without-currency.input';

@InputType()
export class CurrencyUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(
    () => CurrenciesOnProductsUncheckedCreateNestedManyWithoutCurrencyInput,
    { nullable: true },
  )
  products?: CurrenciesOnProductsUncheckedCreateNestedManyWithoutCurrencyInput;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
