import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CurrenciesOnProductsScalarWhereInput {

    @Field(() => [CurrenciesOnProductsScalarWhereInput], {nullable:true})
    AND?: Array<CurrenciesOnProductsScalarWhereInput>;

    @Field(() => [CurrenciesOnProductsScalarWhereInput], {nullable:true})
    OR?: Array<CurrenciesOnProductsScalarWhereInput>;

    @Field(() => [CurrenciesOnProductsScalarWhereInput], {nullable:true})
    NOT?: Array<CurrenciesOnProductsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    sell_price?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    productId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    currencyId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
