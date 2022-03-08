import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnShopsWhereInput } from './users-on-shops-where.input';

@InputType()
export class UsersOnShopsListRelationFilter {

    @Field(() => UsersOnShopsWhereInput, {nullable:true})
    every?: UsersOnShopsWhereInput;

    @Field(() => UsersOnShopsWhereInput, {nullable:true})
    some?: UsersOnShopsWhereInput;

    @Field(() => UsersOnShopsWhereInput, {nullable:true})
    none?: UsersOnShopsWhereInput;
}
