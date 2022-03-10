import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopCreateManyInput } from './shop-create-many.input';

@ArgsType()
export class CreateManyShopArgs {
  @Field(() => [ShopCreateManyInput], { nullable: false })
  data!: Array<ShopCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
