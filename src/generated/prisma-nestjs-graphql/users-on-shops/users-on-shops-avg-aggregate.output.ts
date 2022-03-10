import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UsersOnShopsAvgAggregate {
  @Field(() => Float, { nullable: true })
  shopId?: number;

  @Field(() => Float, { nullable: true })
  userId?: number;
}
