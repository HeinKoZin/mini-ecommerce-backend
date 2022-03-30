import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { HideField, ObjectType, OmitType } from '@nestjs/graphql';

@ObjectType()
export class UserEntity extends OmitType(User, ['password']) {
  @HideField()
  password: string;
}
