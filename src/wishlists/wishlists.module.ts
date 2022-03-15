import { Module } from '@nestjs/common';
import { WishlistsService } from './wishlists.service';
import { WishlistsResolver } from './wishlists.resolver';
import { UsersService } from '@users/users.service';

@Module({
  providers: [WishlistsResolver, WishlistsService, UsersService],
})
export class WishlistsModule {}
