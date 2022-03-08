import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopWhereUniqueInput } from './shop-where-unique.input';
import { ShopCreateInput } from './shop-create.input';
import { ShopUpdateInput } from './shop-update.input';

@ArgsType()
export class UpsertOneShopArgs {

    @Field(() => ShopWhereUniqueInput, {nullable:false})
    where!: ShopWhereUniqueInput;

    @Field(() => ShopCreateInput, {nullable:false})
    create!: ShopCreateInput;

    @Field(() => ShopUpdateInput, {nullable:false})
    update!: ShopUpdateInput;
}
