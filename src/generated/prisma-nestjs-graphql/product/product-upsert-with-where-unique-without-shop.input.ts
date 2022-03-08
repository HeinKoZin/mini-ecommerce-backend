import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutShopInput } from './product-update-without-shop.input';
import { ProductCreateWithoutShopInput } from './product-create-without-shop.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutShopInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutShopInput, {nullable:false})
    update!: ProductUpdateWithoutShopInput;

    @Field(() => ProductCreateWithoutShopInput, {nullable:false})
    create!: ProductCreateWithoutShopInput;
}
