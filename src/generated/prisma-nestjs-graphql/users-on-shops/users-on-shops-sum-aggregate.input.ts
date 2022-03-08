import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UsersOnShopsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    shopId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}