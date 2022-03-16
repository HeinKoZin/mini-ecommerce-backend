import { Module } from '@nestjs/common';
import { WishlistsService } from './wishlists.service';
import { WishlistsResolver } from './wishlists.resolver';
import { UsersService } from '@users/users.service';
import { ProductsService } from '@products/products.service';

@Module({
  providers: [
    WishlistsResolver,
    WishlistsService,
    UsersService,
    ProductsService,
  ],
})
export class WishlistsModule {}
