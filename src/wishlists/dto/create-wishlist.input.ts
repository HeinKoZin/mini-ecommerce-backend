import { UsersOnWishlistsCreateInput } from '@generated/prisma-nestjs-graphql/users-on-wishlists/users-on-wishlists-create.input';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateWishlistInput extends UsersOnWishlistsCreateInput {}
