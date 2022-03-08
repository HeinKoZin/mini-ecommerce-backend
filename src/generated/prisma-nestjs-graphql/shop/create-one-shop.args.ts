import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopCreateInput } from './shop-create.input';

@ArgsType()
export class CreateOneShopArgs {

    @Field(() => ShopCreateInput, {nullable:false})
    data!: ShopCreateInput;
}
