import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrenciesOnProductsCreateManyCurrencyInput } from './currencies-on-products-create-many-currency.input';

@InputType()
export class CurrenciesOnProductsCreateManyCurrencyInputEnvelope {
  @Field(() => [CurrenciesOnProductsCreateManyCurrencyInput], {
    nullable: false,
  })
  data!: Array<CurrenciesOnProductsCreateManyCurrencyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
