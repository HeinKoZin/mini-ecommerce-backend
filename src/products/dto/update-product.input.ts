import { InputType, Field, Int } from '@nestjs/graphql';
import { ProductUpdateInput } from '@generated/prisma-nestjs-graphql/product/product-update.input';

@InputType()
export class UpdateProductInput extends ProductUpdateInput {
  @Field(() => Int, { description: 'Product id field' })
  id!: number;
}
