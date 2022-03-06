import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma.service';
import { CreateShopInput } from './dto/create-shop.input';
import { UpdateShopInput } from './dto/update-shop.input';

@Injectable()
export class ShopsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createShopInput: CreateShopInput, ownerId: number) {
    const createdShop = await this.prismaService.shop.create({
      data: {
        ...createShopInput,
      },
      include: {
        owners: true,
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

  async findAll() {
    const shops = await this.prismaService.shop.findMany({
      include: {
        products: true,
        owners: true,
      },
    });
    console.log(shops);
    return shops;
  }

  async findOne(id: number) {
    const shop = await this.prismaService.shop.findUnique({
      where: { id },
      include: {
        products: true,
        owners: true,
      },
    });
    return shop;
  }

  // findProducts(id: number) {
  //   const products = this.prismaService.product.findMany({
  //     where: { shopId: id },
  //     include: {
  //       shop: true,
  //     },
  //   });
  //   return products;
  // }

  update(id: number, updateShopInput: UpdateShopInput) {
    const updatedShop = this.prismaService.shop.update({
      where: { id },
      data: {
        ...updateShopInput,
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
