import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserType } from './user-type.enum';
import { NestedEnumUserTypeFilter } from './nested-enum-user-type-filter.input';

@InputType()
export class EnumUserTypeFilter {

    @Field(() => UserType, {nullable:true})
    equals?: keyof typeof UserType;

    @Field(() => [UserType], {nullable:true})
    in?: Array<keyof typeof UserType>;

    @Field(() => [UserType], {nullable:true})
    notIn?: Array<keyof typeof UserType>;

    @Field(() => NestedEnumUserTypeFilter, {nullable:true})
    not?: NestedEnumUserTypeFilter;
}
