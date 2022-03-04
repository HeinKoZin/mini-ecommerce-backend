import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma.service';
import { CreateShopInput } from './dto/create-shop.input';
import { UpdateShopInput } from './dto/update-shop.input';

@Injectable()
export class ShopsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createShopInput: CreateShopInput) {
    const createdShop = this.prismaService.shop.create({
      data: {
        ...createShopInput,
      },
    });
    return createdShop;
  }

  findAll() {
    const shops = this.prismaService.shop.findMany({});
    return shops;
  }

  findOne(id: number) {
    const shop = this.prismaService.shop.findUnique({
      where: { id },
    });
    return shop;
  }

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
