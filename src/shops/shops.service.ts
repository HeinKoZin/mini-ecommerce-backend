import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma.service';
import { CreateShopInput } from './dto/create-shop.input';
import { UpdateShopInput } from './dto/update-shop.input';

@Injectable()
export class ShopsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createShopInput: CreateShopInput) {
    const createdShop = await this.prismaService.shop.create({
      data: {
        ...createShopInput,
      },
      include: {
        owners: true,
      },
    });

    const owner = await this.prismaService.user.findUnique({
      where: { id: createdShop.owners[0].userId },
    });

    createdShop
      ? await this.prismaService.usersOnShops.create({
          data: {
            shopId: createdShop.id,
            userId: createdShop.owners[0].userId,
            assignedby: owner.name,
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
        owners: true,
      },
      take,
      orderBy: {
        createdAt: 'desc',
      },
    });
    return shops;
  }

  async findOne(id: number) {
    const shop = await this.prismaService.shop.findUnique({
      where: { id },
      include: {
        _count: true,
      },
    });
    return shop;
  }

  async update(updateShopInput: UpdateShopInput) {
    const updatedShop = await this.prismaService.shop.update({
      where: { id: updateShopInput.id },
      data: {
        ...updateShopInput,
      },
      include: {
        owners: true,
      },
    });
    return updatedShop;
  }

  async remove(id: number) {
    const removedShop = await this.prismaService.shop.delete({
      where: { id },
    });
    return removedShop;
  }
}
