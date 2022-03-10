import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShopRelationFilter } from '../shop/shop-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UsersOnShopsWhereInput {
  @Field(() => [UsersOnShopsWhereInput], { nullable: true })
  AND?: Array<UsersOnShopsWhereInput>;

  @Field(() => [UsersOnShopsWhereInput], { nullable: true })
  OR?: Array<UsersOnShopsWhereInput>;

  @Field(() => [UsersOnShopsWhereInput], { nullable: true })
  NOT?: Array<UsersOnShopsWhereInput>;

  @Field(() => ShopRelationFilter, { nullable: true })
  shop?: ShopRelationFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter;

  @Field(() => IntFilter, { nullable: true })
  shopId?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  userId?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  assignedby?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;
}
