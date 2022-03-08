import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrenciesOnProductsWhereUniqueInput } from './currencies-on-products-where-unique.input';
import { CurrenciesOnProductsUpdateWithoutProductInput } from './currencies-on-products-update-without-product.input';

@InputType()
export class CurrenciesOnProductsUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => CurrenciesOnProductsWhereUniqueInput, {nullable:false})
    where!: CurrenciesOnProductsWhereUniqueInput;

    @Field(() => CurrenciesOnProductsUpdateWithoutProductInput, {nullable:false})
    data!: CurrenciesOnProductsUpdateWithoutProductInput;
}
