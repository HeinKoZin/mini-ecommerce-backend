import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateWithoutProductsInput } from './currency-create-without-products.input';
import { CurrencyCreateOrConnectWithoutProductsInput } from './currency-create-or-connect-without-products.input';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';

@InputType()
export class CurrencyCreateNestedOneWithoutProductsInput {

    @Field(() => CurrencyCreateWithoutProductsInput, {nullable:true})
    create?: CurrencyCreateWithoutProductsInput;

    @Field(() => CurrencyCreateOrConnectWithoutProductsInput, {nullable:true})
    connectOrCreate?: CurrencyCreateOrConnectWithoutProductsInput;

    @Field(() => CurrencyWhereUniqueInput, {nullable:true})
    connect?: CurrencyWhereUniqueInput;
}
