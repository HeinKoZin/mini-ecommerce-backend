import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserType } from '../prisma/user-type.enum';

@InputType()
export class UserUncheckedCreateWithoutShopsInput {
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

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
