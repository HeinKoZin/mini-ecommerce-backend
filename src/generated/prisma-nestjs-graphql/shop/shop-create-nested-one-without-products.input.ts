import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShopCreateWithoutProductsInput } from './shop-create-without-products.input';
import { ShopCreateOrConnectWithoutProductsInput } from './shop-create-or-connect-without-products.input';
import { ShopWhereUniqueInput } from './shop-where-unique.input';

@InputType()
export class ShopCreateNestedOneWithoutProductsInput {

    @Field(() => ShopCreateWithoutProductsInput, {nullable:true})
    create?: ShopCreateWithoutProductsInput;

    @Field(() => ShopCreateOrConnectWithoutProductsInput, {nullable:true})
    connectOrCreate?: ShopCreateOrConnectWithoutProductsInput;

    @Field(() => ShopWhereUniqueInput, {nullable:true})
    connect?: ShopWhereUniqueInput;
}
