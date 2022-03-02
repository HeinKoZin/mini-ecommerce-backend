import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User, UserRole } from '@prisma/client';

@ObjectType()
export class UserEntity implements User {
  @Field(() => Int, { description: 'User id field' })
  id: number;

  @Field(() => String, { description: 'User name field' })
  name: string;

  @Field(() => String, { description: 'User email field' })
  email: string;

  @Field(() => String, { description: 'User password field' })
  password: string;

  @Field()
  role: UserRole;

  @Field(() => String, { description: 'User createdAt field' })
  createdAt: Date;

  @Field(() => String, { description: 'User updatedAt field' })
  updatedAt: Date;
}
