import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutShopInput } from '../product/product-unchecked-create-nested-many-without-shop.input';
import { UsersOnShopsUncheckedCreateNestedManyWithoutShopInput } from '../users-on-shops/users-on-shops-unchecked-create-nested-many-without-shop.input';

@InputType()
export class ShopUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => ProductUncheckedCreateNestedManyWithoutShopInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutShopInput;

    @Field(() => UsersOnShopsUncheckedCreateNestedManyWithoutShopInput, {nullable:true})
    owners?: UsersOnShopsUncheckedCreateNestedManyWithoutShopInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
