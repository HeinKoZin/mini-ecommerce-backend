import { ProductCreateInput } from '@generated/prisma-nestjs-graphql/product/product-create.input';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput extends ProductCreateInput {
  @Field(() => Int, { description: 'Product id field' })
  id?: number;
}
