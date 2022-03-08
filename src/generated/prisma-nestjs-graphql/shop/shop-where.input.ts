import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';
import { UsersOnShopsListRelationFilter } from '../users-on-shops/users-on-shops-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ShopWhereInput {

    @Field(() => [ShopWhereInput], {nullable:true})
    AND?: Array<ShopWhereInput>;

    @Field(() => [ShopWhereInput], {nullable:true})
    OR?: Array<ShopWhereInput>;

    @Field(() => [ShopWhereInput], {nullable:true})
    NOT?: Array<ShopWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;

    @Field(() => UsersOnShopsListRelationFilter, {nullable:true})
    owners?: UsersOnShopsListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
