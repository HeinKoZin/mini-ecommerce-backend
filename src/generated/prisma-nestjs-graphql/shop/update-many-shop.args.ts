import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShopUpdateManyMutationInput } from './shop-update-many-mutation.input';
import { ShopWhereInput } from './shop-where.input';

@ArgsType()
export class UpdateManyShopArgs {
  @Field(() => ShopUpdateManyMutationInput, { nullable: false })
  data!: ShopUpdateManyMutationInput;

  @Field(() => ShopWhereInput, { nullable: true })
  where?: ShopWhereInput;
}
