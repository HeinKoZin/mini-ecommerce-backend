import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutShopsInput } from './user-create-without-shops.input';

@InputType()
export class UserCreateOrConnectWithoutShopsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutShopsInput, { nullable: false })
  create!: UserCreateWithoutShopsInput;
}
