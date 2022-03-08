import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnShopsWhereUniqueInput } from './users-on-shops-where-unique.input';
import { UsersOnShopsCreateWithoutShopInput } from './users-on-shops-create-without-shop.input';

@InputType()
export class UsersOnShopsCreateOrConnectWithoutShopInput {

    @Field(() => UsersOnShopsWhereUniqueInput, {nullable:false})
    where!: UsersOnShopsWhereUniqueInput;

    @Field(() => UsersOnShopsCreateWithoutShopInput, {nullable:false})
    create!: UsersOnShopsCreateWithoutShopInput;
}
