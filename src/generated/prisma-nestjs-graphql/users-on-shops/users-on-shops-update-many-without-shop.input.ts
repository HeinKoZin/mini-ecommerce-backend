import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnShopsCreateWithoutShopInput } from './users-on-shops-create-without-shop.input';
import { UsersOnShopsCreateOrConnectWithoutShopInput } from './users-on-shops-create-or-connect-without-shop.input';
import { UsersOnShopsUpsertWithWhereUniqueWithoutShopInput } from './users-on-shops-upsert-with-where-unique-without-shop.input';
import { UsersOnShopsCreateManyShopInputEnvelope } from './users-on-shops-create-many-shop-input-envelope.input';
import { UsersOnShopsWhereUniqueInput } from './users-on-shops-where-unique.input';
import { UsersOnShopsUpdateWithWhereUniqueWithoutShopInput } from './users-on-shops-update-with-where-unique-without-shop.input';
import { UsersOnShopsUpdateManyWithWhereWithoutShopInput } from './users-on-shops-update-many-with-where-without-shop.input';
import { UsersOnShopsScalarWhereInput } from './users-on-shops-scalar-where.input';

@InputType()
export class UsersOnShopsUpdateManyWithoutShopInput {

    @Field(() => [UsersOnShopsCreateWithoutShopInput], {nullable:true})
    create?: Array<UsersOnShopsCreateWithoutShopInput>;

    @Field(() => [UsersOnShopsCreateOrConnectWithoutShopInput], {nullable:true})
    connectOrCreate?: Array<UsersOnShopsCreateOrConnectWithoutShopInput>;

    @Field(() => [UsersOnShopsUpsertWithWhereUniqueWithoutShopInput], {nullable:true})
    upsert?: Array<UsersOnShopsUpsertWithWhereUniqueWithoutShopInput>;

    @Field(() => UsersOnShopsCreateManyShopInputEnvelope, {nullable:true})
    createMany?: UsersOnShopsCreateManyShopInputEnvelope;

    @Field(() => [UsersOnShopsWhereUniqueInput], {nullable:true})
    set?: Array<UsersOnShopsWhereUniqueInput>;

    @Field(() => [UsersOnShopsWhereUniqueInput], {nullable:true})
    disconnect?: Array<UsersOnShopsWhereUniqueInput>;

    @Field(() => [UsersOnShopsWhereUniqueInput], {nullable:true})
    delete?: Array<UsersOnShopsWhereUniqueInput>;

    @Field(() => [UsersOnShopsWhereUniqueInput], {nullable:true})
    connect?: Array<UsersOnShopsWhereUniqueInput>;

    @Field(() => [UsersOnShopsUpdateWithWhereUniqueWithoutShopInput], {nullable:true})
    update?: Array<UsersOnShopsUpdateWithWhereUniqueWithoutShopInput>;

    @Field(() => [UsersOnShopsUpdateManyWithWhereWithoutShopInput], {nullable:true})
    updateMany?: Array<UsersOnShopsUpdateManyWithWhereWithoutShopInput>;

    @Field(() => [UsersOnShopsScalarWhereInput], {nullable:true})
    deleteMany?: Array<UsersOnShopsScalarWhereInput>;
}
