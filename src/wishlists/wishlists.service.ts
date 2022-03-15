import { Query } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma.service';
import { UsersService } from '@users/users.service';
import { CreateWishlistInput } from './dto/create-wishlist.input';
import { UpdateWishlistInput } from './dto/update-wishlist.input';

@Injectable()
export class WishlistsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UsersService,
  ) {}

  async create(createWishlistInput: CreateWishlistInput) {
    const checkExistingWishlist =
      await this.prismaService.usersOnWishlists.findFirst({
        where: {
          userId: createWishlistInput.user.connect.id,
          productId: createWishlistInput.product.connect.id,
        },
      });

    if (checkExistingWishlist) {
      throw new Error('Wishlist already exists');
    } else {
      const wishlist = await this.prismaService.usersOnWishlists.create({
        data: {
          user: {
            connect: {
              id: createWishlistInput.user.connect.id,
            },
          },
          product: {
            connect: {
              id: createWishlistInput.product.connect.id,
            },
          },
        },
      });
      return wishlist;
    }
  }

  async findAll() {
    const allWishlists = await this.prismaService.usersOnWishlists.findMany({});
    return allWishlists;
  }

  async getUser(userId: number) {
    const user = await this.userService.findOne(userId);
    return user;
  }

  async findOne(id: number) {
    const wishlist = await this.prismaService.usersOnWishlists.findUnique({
      where: {
        id,
      },
    });
    return wishlist;
  }

  async update(id: number, updateWishlistInput: UpdateWishlistInput) {
    const wishlist = await this.findOne(id);
    if (wishlist) {
      const updatedWishlist = await this.prismaService.usersOnWishlists.update({
        where: {
          id,
        },
        data: {
          user: {
            connect: {
              id: updateWishlistInput.user.connect.id,
            },
          },
          product: {
            connect: {
              id: updateWishlistInput.product.connect.id,
            },
          },
        },
      });
      return updatedWishlist;
    } else {
      throw new Error('Wishlist does not exist');
    }
  }

  async remove(id: number) {
    const wishlist = await this.findOne(id);
    wishlist
      ? await this.prismaService.usersOnWishlists.delete({
          where: {
            id,
          },
        })
      : () => {
          throw new Error('Wishlist does not exist');
        };
  }
}
