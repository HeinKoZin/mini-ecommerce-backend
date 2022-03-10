import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutShopsInput } from './user-create-without-shops.input';
import { UserCreateOrConnectWithoutShopsInput } from './user-create-or-connect-without-shops.input';
import { UserUpsertWithoutShopsInput } from './user-upsert-without-shops.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutShopsInput } from './user-update-without-shops.input';

@InputType()
export class UserUpdateOneRequiredWithoutShopsInput {
  @Field(() => UserCreateWithoutShopsInput, { nullable: true })
  create?: UserCreateWithoutShopsInput;

  @Field(() => UserCreateOrConnectWithoutShopsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutShopsInput;

  @Field(() => UserUpsertWithoutShopsInput, { nullable: true })
  upsert?: UserUpsertWithoutShopsInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutShopsInput, { nullable: true })
  update?: UserUpdateWithoutShopsInput;
}
