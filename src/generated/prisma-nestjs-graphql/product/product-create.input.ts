import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShopCreateNestedOneWithoutProductsInput } from '../shop/shop-create-nested-one-without-products.input';
import { ProductStatus } from '../prisma/product-status.enum';

@InputType()
export class ProductCreateInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => Int, { nullable: false })
  quantity!: number;

  @Field(() => String, { nullable: false })
  product_code!: string;

  @Field(() => ShopCreateNestedOneWithoutProductsInput, { nullable: false })
  shop!: ShopCreateNestedOneWithoutProductsInput;

  @Field(() => ProductStatus, { nullable: false })
  status!: keyof typeof ProductStatus;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
