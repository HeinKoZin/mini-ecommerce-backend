import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnShopsCreateWithoutUserInput } from './users-on-shops-create-without-user.input';
import { UsersOnShopsCreateOrConnectWithoutUserInput } from './users-on-shops-create-or-connect-without-user.input';
import { UsersOnShopsUpsertWithWhereUniqueWithoutUserInput } from './users-on-shops-upsert-with-where-unique-without-user.input';
import { UsersOnShopsCreateManyUserInputEnvelope } from './users-on-shops-create-many-user-input-envelope.input';
import { UsersOnShopsWhereUniqueInput } from './users-on-shops-where-unique.input';
import { UsersOnShopsUpdateWithWhereUniqueWithoutUserInput } from './users-on-shops-update-with-where-unique-without-user.input';
import { UsersOnShopsUpdateManyWithWhereWithoutUserInput } from './users-on-shops-update-many-with-where-without-user.input';
import { UsersOnShopsScalarWhereInput } from './users-on-shops-scalar-where.input';

@InputType()
export class UsersOnShopsUncheckedUpdateManyWithoutUserInput {

    @Field(() => [UsersOnShopsCreateWithoutUserInput], {nullable:true})
    create?: Array<UsersOnShopsCreateWithoutUserInput>;

    @Field(() => [UsersOnShopsCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<UsersOnShopsCreateOrConnectWithoutUserInput>;

    @Field(() => [UsersOnShopsUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<UsersOnShopsUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UsersOnShopsCreateManyUserInputEnvelope, {nullable:true})
    createMany?: UsersOnShopsCreateManyUserInputEnvelope;

    @Field(() => [UsersOnShopsWhereUniqueInput], {nullable:true})
    set?: Array<UsersOnShopsWhereUniqueInput>;

    @Field(() => [UsersOnShopsWhereUniqueInput], {nullable:true})
    disconnect?: Array<UsersOnShopsWhereUniqueInput>;

    @Field(() => [UsersOnShopsWhereUniqueInput], {nullable:true})
    delete?: Array<UsersOnShopsWhereUniqueInput>;

    @Field(() => [UsersOnShopsWhereUniqueInput], {nullable:true})
    connect?: Array<UsersOnShopsWhereUniqueInput>;

    @Field(() => [UsersOnShopsUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<UsersOnShopsUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UsersOnShopsUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<UsersOnShopsUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UsersOnShopsScalarWhereInput], {nullable:true})
    deleteMany?: Array<UsersOnShopsScalarWhereInput>;
}
