import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyShopInput } from './product-create-many-shop.input';

@InputType()
export class ProductCreateManyShopInputEnvelope {
  @Field(() => [ProductCreateManyShopInput], { nullable: false })
  data!: Array<ProductCreateManyShopInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
