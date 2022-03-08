import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnShopsWhereUniqueInput } from './users-on-shops-where-unique.input';
import { UsersOnShopsUpdateWithoutUserInput } from './users-on-shops-update-without-user.input';

@InputType()
export class UsersOnShopsUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UsersOnShopsWhereUniqueInput, {nullable:false})
    where!: UsersOnShopsWhereUniqueInput;

    @Field(() => UsersOnShopsUpdateWithoutUserInput, {nullable:false})
    data!: UsersOnShopsUpdateWithoutUserInput;
}
