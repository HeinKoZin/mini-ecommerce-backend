import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutShopsInput } from './user-update-without-shops.input';
import { UserCreateWithoutShopsInput } from './user-create-without-shops.input';

@InputType()
export class UserUpsertWithoutShopsInput {
  @Field(() => UserUpdateWithoutShopsInput, { nullable: false })
  update!: UserUpdateWithoutShopsInput;

  @Field(() => UserCreateWithoutShopsInput, { nullable: false })
  create!: UserCreateWithoutShopsInput;
}
