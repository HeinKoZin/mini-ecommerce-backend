import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrenciesOnProductsWhereUniqueInput } from './currencies-on-products-where-unique.input';
import { CurrenciesOnProductsUpdateWithoutCurrencyInput } from './currencies-on-products-update-without-currency.input';
import { CurrenciesOnProductsCreateWithoutCurrencyInput } from './currencies-on-products-create-without-currency.input';

@InputType()
export class CurrenciesOnProductsUpsertWithWhereUniqueWithoutCurrencyInput {

    @Field(() => CurrenciesOnProductsWhereUniqueInput, {nullable:false})
    where!: CurrenciesOnProductsWhereUniqueInput;

    @Field(() => CurrenciesOnProductsUpdateWithoutCurrencyInput, {nullable:false})
    update!: CurrenciesOnProductsUpdateWithoutCurrencyInput;

    @Field(() => CurrenciesOnProductsCreateWithoutCurrencyInput, {nullable:false})
    create!: CurrenciesOnProductsCreateWithoutCurrencyInput;
}
