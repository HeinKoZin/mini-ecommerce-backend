import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ShopRelationFilter } from '../shop/shop-relation-filter.input';
import { EnumProductStatusFilter } from '../prisma/enum-product-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProductWhereInput {
  @Field(() => [ProductWhereInput], { nullable: true })
  AND?: Array<ProductWhereInput>;

  @Field(() => [ProductWhereInput], { nullable: true })
  OR?: Array<ProductWhereInput>;

  @Field(() => [ProductWhereInput], { nullable: true })
  NOT?: Array<ProductWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  quantity?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  product_code?: StringFilter;

  @Field(() => ShopRelationFilter, { nullable: true })
  shop?: ShopRelationFilter;

  @Field(() => EnumProductStatusFilter, { nullable: true })
  status?: EnumProductStatusFilter;

  @Field(() => IntFilter, { nullable: true })
  shopId?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;
}
