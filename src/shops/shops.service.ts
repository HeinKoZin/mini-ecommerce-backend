import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma.service';
import { CurrentUserEntity } from '@users/entities/current-user.entity';
import { CreateShopInput } from './dto/create-shop.input';
import { UpdateShopInput } from './dto/update-shop.input';

@Injectable()
export class ShopsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createShopInput: CreateShopInput, user: CurrentUserEntity) {
    // Fist create the shop
    const createdShop = await this.prismaService.shop.create({
      data: {
        ...createShopInput,
      },
      include: {
        owners: true,
      },
    });

    // Then connect user on shop
    createdShop
      ? await this.prismaService.usersOnShops.create({
          // create ralation on usersOnShops table

          data: {
            userId: user.id,
            shopId: createdShop.id,
            assignedby: user.name,
          },
        })
      : null;

    // And then return created shop
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
