import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserType } from './user-type.enum';
import { NestedEnumUserTypeWithAggregatesFilter } from './nested-enum-user-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUserTypeFilter } from './nested-enum-user-type-filter.input';

@InputType()
export class EnumUserTypeWithAggregatesFilter {
  @Field(() => UserType, { nullable: true })
  equals?: keyof typeof UserType;

  @Field(() => [UserType], { nullable: true })
  in?: Array<keyof typeof UserType>;

  @Field(() => [UserType], { nullable: true })
  notIn?: Array<keyof typeof UserType>;

  @Field(() => NestedEnumUserTypeWithAggregatesFilter, { nullable: true })
  not?: NestedEnumUserTypeWithAggregatesFilter;

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter;

  @Field(() => NestedEnumUserTypeFilter, { nullable: true })
  _min?: NestedEnumUserTypeFilter;

  @Field(() => NestedEnumUserTypeFilter, { nullable: true })
  _max?: NestedEnumUserTypeFilter;
}
