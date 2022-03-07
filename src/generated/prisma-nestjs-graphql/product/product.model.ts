import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Shop } from '../shop/shop.model';
import { ProductStatus } from '../prisma/product-status.enum';

@ObjectType()
export class Product {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => Int, { nullable: false })
  quantity!: number;

  @Field(() => String, { nullable: false })
  product_code!: string;

  @Field(() => Shop, { nullable: false })
  shop?: Shop;

  @Field(() => ProductStatus, { nullable: false })
  status!: keyof typeof ProductStatus;

  @Field(() => Int, { nullable: false })
  shopId!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
