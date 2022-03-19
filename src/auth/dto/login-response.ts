import { Field, ObjectType } from '@nestjs/graphql';
import { UserEntity } from '@users/entities/user.entity';

@ObjectType()
export class LoginResponse {
  @Field(() => String, { nullable: false, description: 'User token' })
  token: string;

  @Field(() => UserEntity, { nullable: false, description: 'User data' })
  user: UserEntity;
}
