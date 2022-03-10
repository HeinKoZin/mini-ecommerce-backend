import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersOnShopsWhereUniqueInput } from './users-on-shops-where-unique.input';
import { UsersOnShopsCreateInput } from './users-on-shops-create.input';
import { UsersOnShopsUpdateInput } from './users-on-shops-update.input';

@ArgsType()
export class UpsertOneUsersOnShopsArgs {
  @Field(() => UsersOnShopsWhereUniqueInput, { nullable: false })
  where!: UsersOnShopsWhereUniqueInput;

  @Field(() => UsersOnShopsCreateInput, { nullable: false })
  create!: UsersOnShopsCreateInput;

  @Field(() => UsersOnShopsUpdateInput, { nullable: false })
  update!: UsersOnShopsUpdateInput;
}
