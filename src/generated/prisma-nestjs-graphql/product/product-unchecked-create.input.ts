import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductStatus } from '../prisma/product-status.enum';
import { CurrenciesOnProductsUncheckedCreateNestedManyWithoutProductInput } from '../currencies-on-products/currencies-on-products-unchecked-create-nested-many-without-product.input';

@InputType()
export class ProductUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => String, {nullable:false})
    product_code!: string;

    @Field(() => ProductStatus, {nullable:false})
    status!: keyof typeof ProductStatus;

    @Field(() => Int, {nullable:false})
    shopId!: number;

    @Field(() => CurrenciesOnProductsUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    currencies?: CurrenciesOnProductsUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
