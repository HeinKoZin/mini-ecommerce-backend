import { Field, InputType, Int } from '@nestjs/graphql';
import { UsersOnWishlistsUpdateInput } from '@generated/prisma-nestjs-graphql/users-on-wishlists/users-on-wishlists-update.input';

@InputType()
export class UpdateWishlistInput extends UsersOnWishlistsUpdateInput {
  @Field(() => Int, { description: "Wishlist's ID", nullable: false })
  id: number;
}
