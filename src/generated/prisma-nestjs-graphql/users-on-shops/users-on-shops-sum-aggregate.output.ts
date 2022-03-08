import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UsersOnShopsSumAggregate {

    @Field(() => Int, {nullable:true})
    shopId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;
}
