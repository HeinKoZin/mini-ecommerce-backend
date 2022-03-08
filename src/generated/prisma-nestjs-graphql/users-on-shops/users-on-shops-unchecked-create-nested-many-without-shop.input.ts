import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnShopsCreateWithoutShopInput } from './users-on-shops-create-without-shop.input';
import { UsersOnShopsCreateOrConnectWithoutShopInput } from './users-on-shops-create-or-connect-without-shop.input';
import { UsersOnShopsCreateManyShopInputEnvelope } from './users-on-shops-create-many-shop-input-envelope.input';
import { UsersOnShopsWhereUniqueInput } from './users-on-shops-where-unique.input';

@InputType()
export class UsersOnShopsUncheckedCreateNestedManyWithoutShopInput {

    @Field(() => [UsersOnShopsCreateWithoutShopInput], {nullable:true})
    create?: Array<UsersOnShopsCreateWithoutShopInput>;

    @Field(() => [UsersOnShopsCreateOrConnectWithoutShopInput], {nullable:true})
    connectOrCreate?: Array<UsersOnShopsCreateOrConnectWithoutShopInput>;

    @Field(() => UsersOnShopsCreateManyShopInputEnvelope, {nullable:true})
    createMany?: UsersOnShopsCreateManyShopInputEnvelope;

    @Field(() => [UsersOnShopsWhereUniqueInput], {nullable:true})
    connect?: Array<UsersOnShopsWhereUniqueInput>;
}
