import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersOnShopsUpdateInput } from './users-on-shops-update.input';
import { UsersOnShopsWhereUniqueInput } from './users-on-shops-where-unique.input';

@ArgsType()
export class UpdateOneUsersOnShopsArgs {
  @Field(() => UsersOnShopsUpdateInput, { nullable: false })
  data!: UsersOnShopsUpdateInput;

  @Field(() => UsersOnShopsWhereUniqueInput, { nullable: false })
  where!: UsersOnShopsWhereUniqueInput;
}
