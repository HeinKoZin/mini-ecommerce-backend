import { InputType, Field } from '@nestjs/graphql';
import { User, UserRole } from '@prisma/client';

@InputType()
export class CreateUserInput implements CreateUserInputType {
  @Field(() => String, { description: 'User name field' })
  name: string;

  @Field(() => String, { description: 'User email field' })
  email: string;

  @Field(() => String, { description: 'User password field' })
  password: string;

  @Field(() => String, { description: 'User role field' })
  role: UserRole;
}

type CreateUserInputType = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
