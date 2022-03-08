import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrenciesOnProductsCreateWithoutCurrencyInput } from './currencies-on-products-create-without-currency.input';
import { CurrenciesOnProductsCreateOrConnectWithoutCurrencyInput } from './currencies-on-products-create-or-connect-without-currency.input';
import { CurrenciesOnProductsCreateManyCurrencyInputEnvelope } from './currencies-on-products-create-many-currency-input-envelope.input';
import { CurrenciesOnProductsWhereUniqueInput } from './currencies-on-products-where-unique.input';

@InputType()
export class CurrenciesOnProductsCreateNestedManyWithoutCurrencyInput {

    @Field(() => [CurrenciesOnProductsCreateWithoutCurrencyInput], {nullable:true})
    create?: Array<CurrenciesOnProductsCreateWithoutCurrencyInput>;

    @Field(() => [CurrenciesOnProductsCreateOrConnectWithoutCurrencyInput], {nullable:true})
    connectOrCreate?: Array<CurrenciesOnProductsCreateOrConnectWithoutCurrencyInput>;

    @Field(() => CurrenciesOnProductsCreateManyCurrencyInputEnvelope, {nullable:true})
    createMany?: CurrenciesOnProductsCreateManyCurrencyInputEnvelope;

    @Field(() => [CurrenciesOnProductsWhereUniqueInput], {nullable:true})
    connect?: Array<CurrenciesOnProductsWhereUniqueInput>;
}
