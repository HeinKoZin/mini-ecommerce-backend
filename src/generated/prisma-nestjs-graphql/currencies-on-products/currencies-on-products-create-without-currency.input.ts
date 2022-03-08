import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutCurrenciesInput } from '../product/product-create-nested-one-without-currencies.input';

@InputType()
export class CurrenciesOnProductsCreateWithoutCurrencyInput {

    @Field(() => Float, {nullable:false})
    sell_price!: number;

    @Field(() => ProductCreateNestedOneWithoutCurrenciesInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutCurrenciesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
