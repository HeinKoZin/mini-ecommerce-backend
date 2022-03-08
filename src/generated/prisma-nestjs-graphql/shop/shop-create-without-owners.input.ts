import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutShopInput } from '../product/product-create-nested-many-without-shop.input';

@InputType()
export class ShopCreateWithoutOwnersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => ProductCreateNestedManyWithoutShopInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutShopInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
