import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnShopsWhereUniqueInput } from './users-on-shops-where-unique.input';
import { UsersOnShopsCreateWithoutUserInput } from './users-on-shops-create-without-user.input';

@InputType()
export class UsersOnShopsCreateOrConnectWithoutUserInput {

    @Field(() => UsersOnShopsWhereUniqueInput, {nullable:false})
    where!: UsersOnShopsWhereUniqueInput;

    @Field(() => UsersOnShopsCreateWithoutUserInput, {nullable:false})
    create!: UsersOnShopsCreateWithoutUserInput;
}
