import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutShopInput } from './product-update-without-shop.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutShopInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutShopInput, {nullable:false})
    data!: ProductUpdateWithoutShopInput;
}
