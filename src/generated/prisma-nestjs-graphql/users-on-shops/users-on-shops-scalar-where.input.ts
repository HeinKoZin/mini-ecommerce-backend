import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UsersOnShopsScalarWhereInput {

    @Field(() => [UsersOnShopsScalarWhereInput], {nullable:true})
    AND?: Array<UsersOnShopsScalarWhereInput>;

    @Field(() => [UsersOnShopsScalarWhereInput], {nullable:true})
    OR?: Array<UsersOnShopsScalarWhereInput>;

    @Field(() => [UsersOnShopsScalarWhereInput], {nullable:true})
    NOT?: Array<UsersOnShopsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    shopId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    assignedby?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
