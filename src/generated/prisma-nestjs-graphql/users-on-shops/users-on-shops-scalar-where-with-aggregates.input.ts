import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UsersOnShopsScalarWhereWithAggregatesInput {
  @Field(() => [UsersOnShopsScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UsersOnShopsScalarWhereWithAggregatesInput>;

  @Field(() => [UsersOnShopsScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UsersOnShopsScalarWhereWithAggregatesInput>;

  @Field(() => [UsersOnShopsScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UsersOnShopsScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  shopId?: IntWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  userId?: IntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  assignedby?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}
