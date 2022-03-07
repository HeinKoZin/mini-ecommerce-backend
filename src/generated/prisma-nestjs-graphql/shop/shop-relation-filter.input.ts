import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShopWhereInput } from './shop-where.input';

@InputType()
export class ShopRelationFilter {
  @Field(() => ShopWhereInput, { nullable: true })
  is?: ShopWhereInput;

  @Field(() => ShopWhereInput, { nullable: true })
  isNot?: ShopWhereInput;
}
