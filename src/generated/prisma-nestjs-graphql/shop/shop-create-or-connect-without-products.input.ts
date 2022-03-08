import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShopWhereUniqueInput } from './shop-where-unique.input';
import { ShopCreateWithoutProductsInput } from './shop-create-without-products.input';

@InputType()
export class ShopCreateOrConnectWithoutProductsInput {

    @Field(() => ShopWhereUniqueInput, {nullable:false})
    where!: ShopWhereUniqueInput;

    @Field(() => ShopCreateWithoutProductsInput, {nullable:false})
    create!: ShopCreateWithoutProductsInput;
}
