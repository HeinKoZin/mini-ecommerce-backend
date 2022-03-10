import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopWhereInput } from './shop-where.input';

@ArgsType()
export class DeleteManyShopArgs {
  @Field(() => ShopWhereInput, { nullable: true })
  where?: ShopWhereInput;
}
