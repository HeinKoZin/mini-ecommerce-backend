import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnShopsWhereUniqueInput } from './users-on-shops-where-unique.input';
import { UsersOnShopsUpdateWithoutUserInput } from './users-on-shops-update-without-user.input';
import { UsersOnShopsCreateWithoutUserInput } from './users-on-shops-create-without-user.input';

@InputType()
export class UsersOnShopsUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UsersOnShopsWhereUniqueInput, {nullable:false})
    where!: UsersOnShopsWhereUniqueInput;

    @Field(() => UsersOnShopsUpdateWithoutUserInput, {nullable:false})
    update!: UsersOnShopsUpdateWithoutUserInput;

    @Field(() => UsersOnShopsCreateWithoutUserInput, {nullable:false})
    create!: UsersOnShopsCreateWithoutUserInput;
}
