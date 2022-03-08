import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UsersOnShopsShopIdUserIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    shopId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;
}
