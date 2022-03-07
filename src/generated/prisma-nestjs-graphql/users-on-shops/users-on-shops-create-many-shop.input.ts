import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UsersOnShopsCreateManyShopInput {
  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => String, { nullable: false })
  assignedby!: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
