import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { CurrencyCreateWithoutProductsInput } from './currency-create-without-products.input';

@InputType()
export class CurrencyCreateOrConnectWithoutProductsInput {

    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    where!: CurrencyWhereUniqueInput;

    @Field(() => CurrencyCreateWithoutProductsInput, {nullable:false})
    create!: CurrencyCreateWithoutProductsInput;
}
