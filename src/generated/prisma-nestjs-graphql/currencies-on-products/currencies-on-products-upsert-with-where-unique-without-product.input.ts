import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrenciesOnProductsWhereUniqueInput } from './currencies-on-products-where-unique.input';
import { CurrenciesOnProductsUpdateWithoutProductInput } from './currencies-on-products-update-without-product.input';
import { CurrenciesOnProductsCreateWithoutProductInput } from './currencies-on-products-create-without-product.input';

@InputType()
export class CurrenciesOnProductsUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => CurrenciesOnProductsWhereUniqueInput, {nullable:false})
    where!: CurrenciesOnProductsWhereUniqueInput;

    @Field(() => CurrenciesOnProductsUpdateWithoutProductInput, {nullable:false})
    update!: CurrenciesOnProductsUpdateWithoutProductInput;

    @Field(() => CurrenciesOnProductsCreateWithoutProductInput, {nullable:false})
    create!: CurrenciesOnProductsCreateWithoutProductInput;
}
