import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrenciesOnProductsCreateWithoutProductInput } from './currencies-on-products-create-without-product.input';
import { CurrenciesOnProductsCreateOrConnectWithoutProductInput } from './currencies-on-products-create-or-connect-without-product.input';
import { CurrenciesOnProductsCreateManyProductInputEnvelope } from './currencies-on-products-create-many-product-input-envelope.input';
import { CurrenciesOnProductsWhereUniqueInput } from './currencies-on-products-where-unique.input';

@InputType()
export class CurrenciesOnProductsUncheckedCreateNestedManyWithoutProductInput {

    @Field(() => [CurrenciesOnProductsCreateWithoutProductInput], {nullable:true})
    create?: Array<CurrenciesOnProductsCreateWithoutProductInput>;

    @Field(() => [CurrenciesOnProductsCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<CurrenciesOnProductsCreateOrConnectWithoutProductInput>;

    @Field(() => CurrenciesOnProductsCreateManyProductInputEnvelope, {nullable:true})
    createMany?: CurrenciesOnProductsCreateManyProductInputEnvelope;

    @Field(() => [CurrenciesOnProductsWhereUniqueInput], {nullable:true})
    connect?: Array<CurrenciesOnProductsWhereUniqueInput>;
}
