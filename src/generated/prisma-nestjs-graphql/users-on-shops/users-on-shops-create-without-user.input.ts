import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShopCreateNestedOneWithoutOwnersInput } from '../shop/shop-create-nested-one-without-owners.input';

@InputType()
export class UsersOnShopsCreateWithoutUserInput {

    @Field(() => ShopCreateNestedOneWithoutOwnersInput, {nullable:false})
    shop!: ShopCreateNestedOneWithoutOwnersInput;

    @Field(() => String, {nullable:false})
    assignedby!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
