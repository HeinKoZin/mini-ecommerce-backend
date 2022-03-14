import { ShopCreateInput } from '@generated/prisma-nestjs-graphql/shop/shop-create.input';
import { ShopUpdateInput } from '@generated/prisma-nestjs-graphql/shop/shop-update.input';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma.service';

@Injectable()
export class ShopsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createShopInput: ShopCreateInput, ownerId: number) {
    const createdShop = await this.prismaService.shop.create({
      data: {
        ...createShopInput,
      },
    });

    createdShop
      ? await this.prismaService.usersOnShops.create({
          data: {
            shopId: createdShop.id,
            userId: ownerId,
            assignedby: 'Hein Ko Zin',
          },
        })
      : null;

    return createdShop;
  }

  async getOwners(shopId: number) {
    const owners = await this.prismaService.user.findMany({
      where: {
        shops: {
          some: {
            shopId: shopId,
          },
        },
      },
      include: {
        _count: true,
      },
    });
    // const owners = [];
    // const res = await this.prismaService.usersOnShops.findMany({
    //   where: {
    //     shopId: shopId,
    //   },
    //   include: {
    //     user: true,
    //     // shop: true,
    //   },
    // });
    // res.forEach(async (owner) => {
    //   await owners.push(owner.user);
    // });
    return owners;
  }

  async getProducts(shopId: number, take: number) {
    const products = await this.prismaService.product.findMany({
      where: {
        shopId,
      },
      include: {
        _count: true,
      },
      take,
    });
    return products;
  }

  async findAll(take = 10) {
    const shops = await this.prismaService.shop.findMany({
      include: {
        _count: true,
        // products: true,
        // owners: true,
      },
      take,
      orderBy: {
        createdAt: 'desc',
      },
    });
    return shops;
  }

  // async getCounts(shopId: number) {
  //   const counts = await this.prismaService.shop.findMany({
  //     where: {
  //       id: shopId,
  //     },
  //     select: {
  //       _count: true,
  //     },
  //   });
  //   return counts[0]._count;
  // }

  async findOne(id: number) {
    const shop = await this.prismaService.shop.findUnique({
      where: { id },
      include: {
        _count: true,
      },
    });
    return shop;
  }

  update(updateShopInput: ShopUpdateInput) {
    console.log(updateShopInput);
    const updatedShop = this.prismaService.shop.update({
      where: { id: 105 },
      data: {
        ...updateShopInput,
      },
      include: {
        owners: true,
      },
    });
    return updatedShop;
  }

  remove(id: number) {
    const removedShop = this.prismaService.shop.delete({
      where: { id },
    });
    return removedShop;
  }
}
