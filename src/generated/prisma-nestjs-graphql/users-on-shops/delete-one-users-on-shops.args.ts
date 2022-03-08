import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersOnShopsWhereUniqueInput } from './users-on-shops-where-unique.input';

@ArgsType()
export class DeleteOneUsersOnShopsArgs {

    @Field(() => UsersOnShopsWhereUniqueInput, {nullable:false})
    where!: UsersOnShopsWhereUniqueInput;
}
