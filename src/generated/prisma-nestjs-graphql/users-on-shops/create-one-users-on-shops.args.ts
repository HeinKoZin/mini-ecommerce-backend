import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersOnShopsCreateInput } from './users-on-shops-create.input';

@ArgsType()
export class CreateOneUsersOnShopsArgs {
  @Field(() => UsersOnShopsCreateInput, { nullable: false })
  data!: UsersOnShopsCreateInput;
}
