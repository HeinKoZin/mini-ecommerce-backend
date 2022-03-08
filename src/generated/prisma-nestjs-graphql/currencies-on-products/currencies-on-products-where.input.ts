import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';
import { CurrencyRelationFilter } from '../currency/currency-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CurrenciesOnProductsWhereInput {

    @Field(() => [CurrenciesOnProductsWhereInput], {nullable:true})
    AND?: Array<CurrenciesOnProductsWhereInput>;

    @Field(() => [CurrenciesOnProductsWhereInput], {nullable:true})
    OR?: Array<CurrenciesOnProductsWhereInput>;

    @Field(() => [CurrenciesOnProductsWhereInput], {nullable:true})
    NOT?: Array<CurrenciesOnProductsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    sell_price?: FloatFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    product?: ProductRelationFilter;

    @Field(() => CurrencyRelationFilter, {nullable:true})
    currency?: CurrencyRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    productId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    currencyId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
