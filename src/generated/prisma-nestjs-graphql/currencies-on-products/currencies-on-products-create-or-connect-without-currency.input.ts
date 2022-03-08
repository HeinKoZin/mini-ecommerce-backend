import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrenciesOnProductsWhereUniqueInput } from './currencies-on-products-where-unique.input';
import { CurrenciesOnProductsCreateWithoutCurrencyInput } from './currencies-on-products-create-without-currency.input';

@InputType()
export class CurrenciesOnProductsCreateOrConnectWithoutCurrencyInput {

    @Field(() => CurrenciesOnProductsWhereUniqueInput, {nullable:false})
    where!: CurrenciesOnProductsWhereUniqueInput;

    @Field(() => CurrenciesOnProductsCreateWithoutCurrencyInput, {nullable:false})
    create!: CurrenciesOnProductsCreateWithoutCurrencyInput;
}
