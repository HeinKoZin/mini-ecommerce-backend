import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Shop as ShopType } from '@prisma/client';

@ObjectType()
export class Shop implements ShopType {
  @Field(() => Int, { description: 'Shop id field' })
  id: number;

  @Field(() => String, { description: 'Shop name field' })
  name: string;

  @Field(() => String, { description: 'Shop address field' })
  address: string;

  @Field(() => String, { description: 'Shop phone field' })
  phone: string;

  @Field(() => String, { description: 'Shop createdAt field' })
  createdAt: Date;

  @Field(() => String, { description: 'Shop updatedAt field' })
  updatedAt: Date;
}
