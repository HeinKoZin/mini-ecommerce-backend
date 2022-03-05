import { InputType, Field } from '@nestjs/graphql';
import { ProductStatus } from '@prisma/client';
import { Product } from '@products/entities/product.entity';

@InputType()
export class CreateProductInput implements CreateProductInputType {
  @Field({ description: 'Product name' })
  name: string;

  @Field({ description: 'Product description' })
  description: string;

  @Field({ description: 'Product price' })
  quantity: number;

  @Field({ description: 'Product status' })
  product_code: string;

  @Field({ description: 'Product status' })
  status: ProductStatus;

  @Field({ description: "Product shop's ID" })
  shopId: number;
}

type CreateProductInputType = Omit<
  Product,
  'id' | 'createdAt' | 'updatedAt' | 'shop'
>;
