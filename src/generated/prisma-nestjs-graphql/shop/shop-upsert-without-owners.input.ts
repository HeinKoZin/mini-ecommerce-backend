import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShopUpdateWithoutOwnersInput } from './shop-update-without-owners.input';
import { ShopCreateWithoutOwnersInput } from './shop-create-without-owners.input';

@InputType()
export class ShopUpsertWithoutOwnersInput {

    @Field(() => ShopUpdateWithoutOwnersInput, {nullable:false})
    update!: ShopUpdateWithoutOwnersInput;

    @Field(() => ShopCreateWithoutOwnersInput, {nullable:false})
    create!: ShopCreateWithoutOwnersInput;
}
