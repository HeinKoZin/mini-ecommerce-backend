import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumProductStatusFilter } from '../prisma/enum-product-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProductScalarWhereInput {
  @Field(() => [ProductScalarWhereInput], { nullable: true })
  AND?: Array<ProductScalarWhereInput>;

  @Field(() => [ProductScalarWhereInput], { nullable: true })
  OR?: Array<ProductScalarWhereInput>;

  @Field(() => [ProductScalarWhereInput], { nullable: true })
  NOT?: Array<ProductScalarWhereInput>;

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

  @Field(() => EnumProductStatusFilter, { nullable: true })
  status?: EnumProductStatusFilter;

  @Field(() => IntFilter, { nullable: true })
  shopId?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;
}
