import { InputType, Int, Field } from '@nestjs/graphql';
import { User, UserType } from '@prisma/client';

@InputType()
export class CreateUserInput implements CreateUserInputType {
  @Field(() => String, { description: 'User name field' })
  name: string;

  @Field(() => String, { description: 'User email field' })
  email: string;

  @Field(() => String, { description: 'User password field' })
  password: string;

  @Field(() => UserType, { description: 'User role field' })
  role: UserType;
}

type CreateUserInputType = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
