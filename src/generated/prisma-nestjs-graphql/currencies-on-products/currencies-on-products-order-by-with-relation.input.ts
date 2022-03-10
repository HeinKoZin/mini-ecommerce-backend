import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductOrderByWithRelationInput } from '../product/product-order-by-with-relation.input';
import { CurrencyOrderByWithRelationInput } from '../currency/currency-order-by-with-relation.input';

@InputType()
export class CurrenciesOnProductsOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sell_price?: keyof typeof SortOrder;

  @Field(() => ProductOrderByWithRelationInput, { nullable: true })
  product?: ProductOrderByWithRelationInput;

  @Field(() => CurrencyOrderByWithRelationInput, { nullable: true })
  currency?: CurrencyOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  productId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  currencyId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}
