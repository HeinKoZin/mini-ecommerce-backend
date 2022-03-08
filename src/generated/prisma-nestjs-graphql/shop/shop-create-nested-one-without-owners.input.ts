import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShopCreateWithoutOwnersInput } from './shop-create-without-owners.input';
import { ShopCreateOrConnectWithoutOwnersInput } from './shop-create-or-connect-without-owners.input';
import { ShopWhereUniqueInput } from './shop-where-unique.input';

@InputType()
export class ShopCreateNestedOneWithoutOwnersInput {

    @Field(() => ShopCreateWithoutOwnersInput, {nullable:true})
    create?: ShopCreateWithoutOwnersInput;

    @Field(() => ShopCreateOrConnectWithoutOwnersInput, {nullable:true})
    connectOrCreate?: ShopCreateOrConnectWithoutOwnersInput;

    @Field(() => ShopWhereUniqueInput, {nullable:true})
    connect?: ShopWhereUniqueInput;
}
