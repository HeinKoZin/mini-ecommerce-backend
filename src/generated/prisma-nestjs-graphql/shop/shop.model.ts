import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { UsersOnShops } from '../users-on-shops/users-on-shops.model';
import { ShopCount } from './shop-count.output';

@ObjectType()
export class Shop {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => [UsersOnShops], {nullable:true})
    owners?: Array<UsersOnShops>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => ShopCount, {nullable:false})
    _count?: ShopCount;
}
