import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductStatus, Shop as ShopType } from '@prisma/client';
import { Product } from '@products/entities/product.entity';

@ObjectType()
export class ProductObj implements Omit<Product, 'shop' | 'shopId'> {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  status: ProductStatus;

  @Field()
  product_code: string;

  @Field()
  quantity: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@ObjectType()
export class Shop implements ShopType {
  @Field(() => Int, { description: 'Shop id field' })
  id: number;

  @Field(() => String, { description: 'Shop name field' })
  name: string;

  @Field(() => String, { description: 'Shop slug field' })
  slug: string;

  @Field(() => String, { description: 'Shop address field' })
  address: string;

  @Field(() => String, { description: 'Shop phone field' })
  phone: string;

  @Field(() => [ProductObj], { description: "Shop's products" })
  products: ProductObj[];

  @Field(() => String, { description: 'Shop createdAt field' })
  createdAt: Date;

  @Field(() => String, { description: 'Shop updatedAt field' })
  updatedAt: Date;
}
