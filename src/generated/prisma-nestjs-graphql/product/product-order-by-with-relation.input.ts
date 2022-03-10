import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShopOrderByWithRelationInput } from '../shop/shop-order-by-with-relation.input';
import { CurrenciesOnProductsOrderByRelationAggregateInput } from '../currencies-on-products/currencies-on-products-order-by-relation-aggregate.input';

@InputType()
export class ProductOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  quantity?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  product_code?: keyof typeof SortOrder;

  @Field(() => ShopOrderByWithRelationInput, { nullable: true })
  shop?: ShopOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  shopId?: keyof typeof SortOrder;

  @Field(() => CurrenciesOnProductsOrderByRelationAggregateInput, {
    nullable: true,
  })
  currencies?: CurrenciesOnProductsOrderByRelationAggregateInput;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}
