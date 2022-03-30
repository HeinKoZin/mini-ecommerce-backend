import { UserCreateInput } from '@generated/prisma-nestjs-graphql/user/user-create.input';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput extends UserCreateInput {
  @Field(() => Number, { description: 'User id field', nullable: true })
  id?: number;
}
