import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { User, UserType } from '@prisma/client';
import { ShopObj } from '@products/entities/product.entity';

// @ObjectType()
// export class UserRole {
//   @Field((type) => Int)
//   id: number;

//   @Field((type) => String)
//   name: string;

//   @Field((type) => String)
//   createdAt: Date;

//   @Field((type) => String)
//   updatedAt: Date;
// }

registerEnumType(UserType, {
  name: 'UserType',
  description: 'The type of user',
});

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

  @Field(() => UserType, { description: 'User type field' })
  role: UserType;

  @Field(() => [ShopObj])
  shops: ShopObj[];

  @Field(() => String, { description: 'User createdAt field' })
  createdAt: Date;

  @Field(() => String, { description: 'User updatedAt field' })
  updatedAt: Date;
}

// type UserRole = Role;

// type UserType = Required<Omit<User, 'id'>>;
