import { CreateShopInput } from './create-shop.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateShopInput extends PartialType(CreateShopInput) {
  @Field(() => Int, { description: 'Shop id field' })
  id: number;
}
