import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Shop } from '../shop/shop.model';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UsersOnShops {
  @Field(() => Shop, { nullable: false })
  shop?: Shop;

  @Field(() => User, { nullable: false })
  user?: User;

  @Field(() => Int, { nullable: false })
  shopId!: number;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => String, { nullable: false })
  assignedby!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
