import { ProductCreateInput } from '@generated/prisma-nestjs-graphql/product/product-create.input';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductInput extends ProductCreateInput {}
