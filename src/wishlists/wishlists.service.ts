import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma.service';
import { UsersService } from '@users/users.service';
import { CreateWishlistInput } from './dto/create-wishlist.input';
import { UpdateWishlistInput } from './dto/update-wishlist.input';

@Injectable()
export class WishlistsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  async create(createWishlistInput: CreateWishlistInput) {
    const checkExistingWishlist = await this.prismaService.wishlists.findFirst({
      where: {
        userId: createWishlistInput.user.connect.id,
        productId: createWishlistInput.product.connect.id,
      },
    });

    checkExistingWishlist
      ? () => {
          throw new Error('Wishlist already exists');
        }
      : await this.prismaService.wishlists.create({
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
  }

  async findAll(userId?: number) {
    const allWishlists = await this.prismaService.wishlists.findMany({
      where: {
        userId,
      },
    });
    return allWishlists;
  }

  async findOne(id: number) {
    const wishlist = await this.prismaService.wishlists.findUnique({
      where: {
        id,
      },
    });
    return wishlist;
  }

  async update(id: number, updateWishlistInput: UpdateWishlistInput) {
    const wishlist = await this.findOne(id);
    wishlist
      ? await this.prismaService.wishlists.update({
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
        })
      : () => {
          throw new Error('Wishlist not found');
        };
  }

  async remove(id: number) {
    const wishlist = await this.findOne(id);
    wishlist
      ? await this.prismaService.wishlists.delete({
          where: {
            id,
          },
        })
      : () => {
          throw new Error('Wishlist does not exist');
        };
  }
}
