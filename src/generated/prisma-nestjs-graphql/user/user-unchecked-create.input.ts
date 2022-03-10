import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserType } from '../prisma/user-type.enum';
import { UsersOnShopsUncheckedCreateNestedManyWithoutUserInput } from '../users-on-shops/users-on-shops-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  @Validator.MinLength(3)
  name!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  @Validator.MinLength(8)
  password!: string;

  @Field(() => UserType, { nullable: true })
  role?: keyof typeof UserType;

  @Field(() => UsersOnShopsUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  shops?: UsersOnShopsUncheckedCreateNestedManyWithoutUserInput;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
