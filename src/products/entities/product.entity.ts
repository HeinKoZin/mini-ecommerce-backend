import { Product } from '@generated/prisma-nestjs-graphql/product/product.model';
import { ObjectType } from '@nestjs/graphql';

// @ObjectType()
// export class ShopObj extends OmitType(Shop, ['products']) {}

// @ObjectType()
// export class Product implements ProductType {
//   @Field(() => Int, { description: 'Product ID' })
//   id: number;

//   @Field({ description: 'Product name' })
//   name: string;

//   @Field({ description: 'Product description' })
//   description: string;

//   @Field({ description: 'Product price' })
//   quantity: number;

//   @Field({ description: 'Product status' })
//   product_code: string;

//   @Field({ description: 'Product status' })
//   status: ProductStatus;

//   @Field({ description: "Product shop's ID" })
//   shopId: number;

//   @Field({ description: 'Product shop' })
//   shop: ShopObj;

//   @Field({ description: 'Product created date' })
//   createdAt: Date;

//   @Field({ description: 'Product updated date' })
//   updatedAt: Date;
// }

@ObjectType()
export class ProductEntity extends Product {}
