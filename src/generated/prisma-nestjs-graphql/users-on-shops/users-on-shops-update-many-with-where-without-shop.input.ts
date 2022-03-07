import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnShopsScalarWhereInput } from './users-on-shops-scalar-where.input';
import { UsersOnShopsUpdateManyMutationInput } from './users-on-shops-update-many-mutation.input';

@InputType()
export class UsersOnShopsUpdateManyWithWhereWithoutShopInput {
  @Field(() => UsersOnShopsScalarWhereInput, { nullable: false })
  where!: UsersOnShopsScalarWhereInput;

  @Field(() => UsersOnShopsUpdateManyMutationInput, { nullable: false })
  data!: UsersOnShopsUpdateManyMutationInput;
}
