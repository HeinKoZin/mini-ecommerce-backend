import { ObjectType, Field, Int, InterfaceType } from '@nestjs/graphql';
import { Role, User } from '@prisma/client';

@ObjectType()
export class UserRole {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  name: string;

  @Field((type) => String)
  createdAt: Date;

  @Field((type) => String)
  updatedAt: Date;
}

@ObjectType()
export class UserEntity implements UserType, UserRole {
  @Field(() => Int, { description: 'User id field' })
  id: number;

  @Field(() => String, { description: 'User name field' })
  name: string;

  @Field(() => String, { description: 'User email field' })
  email: string;

  @Field(() => String, { description: 'User password field' })
  password: string;

  @Field(() => Int, { description: 'User roleId field' })
  roleId: number;

  @Field(() => String, { description: 'User createdAt field' })
  createdAt: Date;

  @Field(() => String, { description: 'User updatedAt field' })
  updatedAt: Date;

  @Field((type) => UserRole)
  role: UserRole;
}

// type UserRole = Role;

type UserType = Required<Omit<User, 'id'>>;
