import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UsersOnShopsCreateManyUserInput {

    @Field(() => Int, {nullable:false})
    shopId!: number;

    @Field(() => String, {nullable:false})
    assignedby!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
