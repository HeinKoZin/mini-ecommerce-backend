import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { CurrenciesOnProductsListRelationFilter } from '../currencies-on-products/currencies-on-products-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CurrencyWhereInput {

    @Field(() => [CurrencyWhereInput], {nullable:true})
    AND?: Array<CurrencyWhereInput>;

    @Field(() => [CurrencyWhereInput], {nullable:true})
    OR?: Array<CurrencyWhereInput>;

    @Field(() => [CurrencyWhereInput], {nullable:true})
    NOT?: Array<CurrencyWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => CurrenciesOnProductsListRelationFilter, {nullable:true})
    products?: CurrenciesOnProductsListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
