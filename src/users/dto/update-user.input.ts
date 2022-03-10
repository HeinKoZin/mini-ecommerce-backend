import { Field, InputType } from '@nestjs/graphql';
import { UserUpdateInput } from '@generated/prisma-nestjs-graphql/user/user-update.input';

@InputType()
export class UpdateUserInput extends UserUpdateInput {
  @Field(() => Number, { description: 'User id field' })
  id: number;
}
