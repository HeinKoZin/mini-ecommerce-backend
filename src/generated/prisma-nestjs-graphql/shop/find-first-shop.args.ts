import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopWhereInput } from './shop-where.input';
import { ShopOrderByWithRelationInput } from './shop-order-by-with-relation.input';
import { ShopWhereUniqueInput } from './shop-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShopScalarFieldEnum } from './shop-scalar-field.enum';

@ArgsType()
export class FindFirstShopArgs {

    @Field(() => ShopWhereInput, {nullable:true})
    where?: ShopWhereInput;

    @Field(() => [ShopOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShopOrderByWithRelationInput>;

    @Field(() => ShopWhereUniqueInput, {nullable:true})
    cursor?: ShopWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShopScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShopScalarFieldEnum>;
}
