import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserType } from './user-type.enum';

@InputType()
export class NestedEnumUserTypeFilter {

    @Field(() => UserType, {nullable:true})
    equals?: keyof typeof UserType;

    @Field(() => [UserType], {nullable:true})
    in?: Array<keyof typeof UserType>;

    @Field(() => [UserType], {nullable:true})
    notIn?: Array<keyof typeof UserType>;

    @Field(() => NestedEnumUserTypeFilter, {nullable:true})
    not?: NestedEnumUserTypeFilter;
}
