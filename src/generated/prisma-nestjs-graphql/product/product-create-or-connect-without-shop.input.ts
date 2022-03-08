import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductCreateWithoutShopInput } from './product-create-without-shop.input';

@InputType()
export class ProductCreateOrConnectWithoutShopInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductCreateWithoutShopInput, {nullable:false})
    create!: ProductCreateWithoutShopInput;
}
