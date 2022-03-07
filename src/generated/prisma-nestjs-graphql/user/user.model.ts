import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserType } from '../prisma/user-type.enum';
import { UsersOnShops } from '../users-on-shops/users-on-shops.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => UserType, { nullable: false, defaultValue: 'USER' })
  role!: keyof typeof UserType;

  @Field(() => [UsersOnShops], { nullable: true })
  shops?: Array<UsersOnShops>;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => UserCount, { nullable: false })
  _count?: UserCount;
}
