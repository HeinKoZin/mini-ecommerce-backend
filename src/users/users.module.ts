import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { WishlistsService } from '@wishlists/wishlists.service';

@Module({
  providers: [UsersResolver, UsersService, WishlistsService],
  exports: [UsersService],
})
export class UsersModule {}
