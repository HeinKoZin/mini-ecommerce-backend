import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnShopsShopIdUserIdCompoundUniqueInput } from './users-on-shops-shop-id-user-id-compound-unique.input';

@InputType()
export class UsersOnShopsWhereUniqueInput {
  @Field(() => UsersOnShopsShopIdUserIdCompoundUniqueInput, { nullable: true })
  shopId_userId?: UsersOnShopsShopIdUserIdCompoundUniqueInput;
}
