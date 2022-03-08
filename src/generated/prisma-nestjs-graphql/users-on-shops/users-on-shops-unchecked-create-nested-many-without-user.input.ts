import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnShopsCreateWithoutUserInput } from './users-on-shops-create-without-user.input';
import { UsersOnShopsCreateOrConnectWithoutUserInput } from './users-on-shops-create-or-connect-without-user.input';
import { UsersOnShopsCreateManyUserInputEnvelope } from './users-on-shops-create-many-user-input-envelope.input';
import { UsersOnShopsWhereUniqueInput } from './users-on-shops-where-unique.input';

@InputType()
export class UsersOnShopsUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UsersOnShopsCreateWithoutUserInput], {nullable:true})
    create?: Array<UsersOnShopsCreateWithoutUserInput>;

    @Field(() => [UsersOnShopsCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<UsersOnShopsCreateOrConnectWithoutUserInput>;

    @Field(() => UsersOnShopsCreateManyUserInputEnvelope, {nullable:true})
    createMany?: UsersOnShopsCreateManyUserInputEnvelope;

    @Field(() => [UsersOnShopsWhereUniqueInput], {nullable:true})
    connect?: Array<UsersOnShopsWhereUniqueInput>;
}
