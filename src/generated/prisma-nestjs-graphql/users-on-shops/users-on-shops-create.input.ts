import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShopCreateNestedOneWithoutOwnersInput } from '../shop/shop-create-nested-one-without-owners.input';
import { UserCreateNestedOneWithoutShopsInput } from '../user/user-create-nested-one-without-shops.input';

@InputType()
export class UsersOnShopsCreateInput {

    @Field(() => ShopCreateNestedOneWithoutOwnersInput, {nullable:false})
    shop!: ShopCreateNestedOneWithoutOwnersInput;

    @Field(() => UserCreateNestedOneWithoutShopsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutShopsInput;

    @Field(() => String, {nullable:false})
    assignedby!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
