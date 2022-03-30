import { UsersOnWishlists } from '@generated/prisma-nestjs-graphql/users-on-wishlists/users-on-wishlists.model';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Wishlist extends UsersOnWishlists {}
