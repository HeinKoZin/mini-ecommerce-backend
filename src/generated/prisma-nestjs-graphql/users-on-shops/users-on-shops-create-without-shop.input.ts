import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutShopsInput } from '../user/user-create-nested-one-without-shops.input';

@InputType()
export class UsersOnShopsCreateWithoutShopInput {

    @Field(() => UserCreateNestedOneWithoutShopsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutShopsInput;

    @Field(() => String, {nullable:false})
    assignedby!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
