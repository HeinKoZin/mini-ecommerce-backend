import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class CurrenciesOnProductsUncheckedCreateWithoutProductInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:false})
    sell_price!: number;

    @Field(() => Int, {nullable:false})
    currencyId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}