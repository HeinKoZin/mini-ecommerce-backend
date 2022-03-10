import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CurrenciesOnProductsScalarWhereWithAggregatesInput {
  @Field(() => [CurrenciesOnProductsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<CurrenciesOnProductsScalarWhereWithAggregatesInput>;

  @Field(() => [CurrenciesOnProductsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<CurrenciesOnProductsScalarWhereWithAggregatesInput>;

  @Field(() => [CurrenciesOnProductsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<CurrenciesOnProductsScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  sell_price?: FloatWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  productId?: IntWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  currencyId?: IntWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}
