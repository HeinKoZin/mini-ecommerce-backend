import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersOnShopsUpdateManyMutationInput } from './users-on-shops-update-many-mutation.input';
import { UsersOnShopsWhereInput } from './users-on-shops-where.input';

@ArgsType()
export class UpdateManyUsersOnShopsArgs {
  @Field(() => UsersOnShopsUpdateManyMutationInput, { nullable: false })
  data!: UsersOnShopsUpdateManyMutationInput;

  @Field(() => UsersOnShopsWhereInput, { nullable: true })
  where?: UsersOnShopsWhereInput;
}
