import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopUpdateInput } from './shop-update.input';
import { ShopWhereUniqueInput } from './shop-where-unique.input';

@ArgsType()
export class UpdateOneShopArgs {

    @Field(() => ShopUpdateInput, {nullable:false})
    data!: ShopUpdateInput;

    @Field(() => ShopWhereUniqueInput, {nullable:false})
    where!: ShopWhereUniqueInput;
}
