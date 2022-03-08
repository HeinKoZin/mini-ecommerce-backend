import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShopWhereUniqueInput } from './shop-where-unique.input';
import { ShopCreateWithoutOwnersInput } from './shop-create-without-owners.input';

@InputType()
export class ShopCreateOrConnectWithoutOwnersInput {

    @Field(() => ShopWhereUniqueInput, {nullable:false})
    where!: ShopWhereUniqueInput;

    @Field(() => ShopCreateWithoutOwnersInput, {nullable:false})
    create!: ShopCreateWithoutOwnersInput;
}
