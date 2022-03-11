import { InputType, Field, Int } from '@nestjs/graphql';
import { ShopUpdateInput } from '@generated/prisma-nestjs-graphql/shop/shop-update.input';

@InputType()
export class UpdateShopInput extends ShopUpdateInput {
  @Field(() => Int, { description: 'Shop id field' })
  id: number;
}
