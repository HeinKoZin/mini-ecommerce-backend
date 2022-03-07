import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersOnShopsWhereInput } from './users-on-shops-where.input';

@ArgsType()
export class DeleteManyUsersOnShopsArgs {
  @Field(() => UsersOnShopsWhereInput, { nullable: true })
  where?: UsersOnShopsWhereInput;
}
