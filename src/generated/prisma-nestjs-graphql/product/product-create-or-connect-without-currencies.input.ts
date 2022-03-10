import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductCreateWithoutCurrenciesInput } from './product-create-without-currencies.input';

@InputType()
export class ProductCreateOrConnectWithoutCurrenciesInput {
  @Field(() => ProductWhereUniqueInput, { nullable: false })
  where!: ProductWhereUniqueInput;

  @Field(() => ProductCreateWithoutCurrenciesInput, { nullable: false })
  create!: ProductCreateWithoutCurrenciesInput;
}
