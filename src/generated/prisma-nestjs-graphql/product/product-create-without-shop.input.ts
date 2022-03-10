import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductStatus } from '../prisma/product-status.enum';
import { CurrenciesOnProductsCreateNestedManyWithoutProductInput } from '../currencies-on-products/currencies-on-products-create-nested-many-without-product.input';

@InputType()
export class ProductCreateWithoutShopInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => Int, { nullable: false })
  quantity!: number;

  @Field(() => String, { nullable: false })
  product_code!: string;

  @Field(() => ProductStatus, { nullable: false })
  status!: keyof typeof ProductStatus;

  @Field(() => CurrenciesOnProductsCreateNestedManyWithoutProductInput, {
    nullable: true,
  })
  currencies?: CurrenciesOnProductsCreateNestedManyWithoutProductInput;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
