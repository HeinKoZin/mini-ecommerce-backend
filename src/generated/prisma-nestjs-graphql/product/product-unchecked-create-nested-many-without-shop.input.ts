import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutShopInput } from './product-create-without-shop.input';
import { ProductCreateOrConnectWithoutShopInput } from './product-create-or-connect-without-shop.input';
import { ProductCreateManyShopInputEnvelope } from './product-create-many-shop-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductUncheckedCreateNestedManyWithoutShopInput {

    @Field(() => [ProductCreateWithoutShopInput], {nullable:true})
    create?: Array<ProductCreateWithoutShopInput>;

    @Field(() => [ProductCreateOrConnectWithoutShopInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutShopInput>;

    @Field(() => ProductCreateManyShopInputEnvelope, {nullable:true})
    createMany?: ProductCreateManyShopInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
}
