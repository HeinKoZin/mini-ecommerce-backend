import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShopCreateWithoutOwnersInput } from './shop-create-without-owners.input';
import { ShopCreateOrConnectWithoutOwnersInput } from './shop-create-or-connect-without-owners.input';
import { ShopUpsertWithoutOwnersInput } from './shop-upsert-without-owners.input';
import { ShopWhereUniqueInput } from './shop-where-unique.input';
import { ShopUpdateWithoutOwnersInput } from './shop-update-without-owners.input';

@InputType()
export class ShopUpdateOneRequiredWithoutOwnersInput {

    @Field(() => ShopCreateWithoutOwnersInput, {nullable:true})
    create?: ShopCreateWithoutOwnersInput;

    @Field(() => ShopCreateOrConnectWithoutOwnersInput, {nullable:true})
    connectOrCreate?: ShopCreateOrConnectWithoutOwnersInput;

    @Field(() => ShopUpsertWithoutOwnersInput, {nullable:true})
    upsert?: ShopUpsertWithoutOwnersInput;

    @Field(() => ShopWhereUniqueInput, {nullable:true})
    connect?: ShopWhereUniqueInput;

    @Field(() => ShopUpdateWithoutOwnersInput, {nullable:true})
    update?: ShopUpdateWithoutOwnersInput;
}
