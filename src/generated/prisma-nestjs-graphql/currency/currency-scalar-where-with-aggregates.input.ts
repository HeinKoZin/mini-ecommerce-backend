import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CurrencyScalarWhereWithAggregatesInput {
  @Field(() => [CurrencyScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<CurrencyScalarWhereWithAggregatesInput>;

  @Field(() => [CurrencyScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<CurrencyScalarWhereWithAggregatesInput>;

  @Field(() => [CurrencyScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<CurrencyScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  code?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}
