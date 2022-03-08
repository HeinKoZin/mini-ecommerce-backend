import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCurrenciesInput } from './product-create-without-currencies.input';
import { ProductCreateOrConnectWithoutCurrenciesInput } from './product-create-or-connect-without-currencies.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutCurrenciesInput {

    @Field(() => ProductCreateWithoutCurrenciesInput, {nullable:true})
    create?: ProductCreateWithoutCurrenciesInput;

    @Field(() => ProductCreateOrConnectWithoutCurrenciesInput, {nullable:true})
    connectOrCreate?: ProductCreateOrConnectWithoutCurrenciesInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: ProductWhereUniqueInput;
}
