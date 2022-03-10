import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersOnShopsWhereInput } from './users-on-shops-where.input';
import { UsersOnShopsOrderByWithRelationInput } from './users-on-shops-order-by-with-relation.input';
import { UsersOnShopsWhereUniqueInput } from './users-on-shops-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UsersOnShopsScalarFieldEnum } from './users-on-shops-scalar-field.enum';

@ArgsType()
export class FindFirstUsersOnShopsArgs {
  @Field(() => UsersOnShopsWhereInput, { nullable: true })
  where?: UsersOnShopsWhereInput;

  @Field(() => [UsersOnShopsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UsersOnShopsOrderByWithRelationInput>;

  @Field(() => UsersOnShopsWhereUniqueInput, { nullable: true })
  cursor?: UsersOnShopsWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [UsersOnShopsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UsersOnShopsScalarFieldEnum>;
}
