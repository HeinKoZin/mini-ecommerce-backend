import { Shop } from '@generated/prisma-nestjs-graphql/shop/shop.model';
import { ObjectType } from '@nestjs/graphql';

// @ObjectType()
// export class ProductObj implements Omit<Product, 'shop' | 'shopId'> {
//   @Field(() => Int)
//   id: number;

//   @Field()
//   name: string;

//   @Field()
//   description: string;

//   @Field()
//   status: ProductStatus;

//   @Field()
//   product_code: string;

//   @Field()
//   quantity: number;

//   @Field()
//   createdAt: Date;

//   @Field()
//   updatedAt: Date;
// }

// @ObjectType()
// export class OwnerObj implements Omit<UserEntity, 'password' | 'shops'> {
//   @Field(() => Int, { description: 'Owner id' })
//   id: number;

//   @Field({ description: 'Owner name' })
//   name: string;

//   @Field({ description: 'Owner email' })
//   email: string;

//   @Field({ description: "Owner's role" })
//   role: UserType;

//   @Field({ description: 'Owner created at' })
//   createdAt: Date;

//   @Field({ description: 'Owner updated at' })
//   updatedAt: Date;
// }

@ObjectType()
export class ShopEntity extends Shop {}
