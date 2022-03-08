import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutShopsInput } from './user-create-without-shops.input';
import { UserCreateOrConnectWithoutShopsInput } from './user-create-or-connect-without-shops.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutShopsInput {

    @Field(() => UserCreateWithoutShopsInput, {nullable:true})
    create?: UserCreateWithoutShopsInput;

    @Field(() => UserCreateOrConnectWithoutShopsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutShopsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
