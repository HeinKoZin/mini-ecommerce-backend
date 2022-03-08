import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrenciesOnProductsWhereUniqueInput } from './currencies-on-products-where-unique.input';
import { CurrenciesOnProductsCreateWithoutProductInput } from './currencies-on-products-create-without-product.input';

@InputType()
export class CurrenciesOnProductsCreateOrConnectWithoutProductInput {

    @Field(() => CurrenciesOnProductsWhereUniqueInput, {nullable:false})
    where!: CurrenciesOnProductsWhereUniqueInput;

    @Field(() => CurrenciesOnProductsCreateWithoutProductInput, {nullable:false})
    create!: CurrenciesOnProductsCreateWithoutProductInput;
}
