import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopWhereUniqueInput } from './shop-where-unique.input';

@ArgsType()
export class FindUniqueShopArgs {
  @Field(() => ShopWhereUniqueInput, { nullable: false })
  where!: ShopWhereUniqueInput;
}
