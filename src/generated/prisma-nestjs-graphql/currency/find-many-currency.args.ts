import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrencyWhereInput } from './currency-where.input';
import { CurrencyOrderByWithRelationInput } from './currency-order-by-with-relation.input';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CurrencyScalarFieldEnum } from './currency-scalar-field.enum';

@ArgsType()
export class FindManyCurrencyArgs {
  @Field(() => CurrencyWhereInput, { nullable: true })
  where?: CurrencyWhereInput;

  @Field(() => [CurrencyOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CurrencyOrderByWithRelationInput>;

  @Field(() => CurrencyWhereUniqueInput, { nullable: true })
  cursor?: CurrencyWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [CurrencyScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CurrencyScalarFieldEnum>;
}
