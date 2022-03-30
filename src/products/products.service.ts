import { ProductCreateInput } from '@dtos/product/product-create.input';
import { ProductUpdateInput } from '@dtos/product/product-update.input';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma.service';
// import { CreateProductInput } from './dto/create-product.input';
// import { UpdateProductInput } from './dto/update-product.input';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createProductInput: ProductCreateInput) {
    console.log(createProductInput);
    const createdProduct = await this.prismaService.product.create({
      include: {
        shop: true,
        currencies: true,
        stock: true,
      },
      data: {
        ...createProductInput,
      },
    });
    return createdProduct;
  }

  async findAll(take = 10) {
    const products = await this.prismaService.product.findMany({
      include: {
        shop: true,
        currencies: {
          include: {
            currency: {
              include: {
                _count: true,
              },
            },
          },
        },
        _count: true,
        stock: true,
      },
      take,
      orderBy: {
        id: 'desc',
      },
    });
    return products;
  }

  async getProductsByUserWishlist(userId: number) {
    const products = await this.prismaService.product.findFirst({
      where: {
        wishlistedBy: {
          some: {
            id: userId,
          },
        },
      },
    });
    return products;
  }

  async getCurrencies(productId: number) {
    const currencies = await this.prismaService.currenciesOnProducts.findMany({
      where: {
        product: {
          id: productId,
        },
      },
      include: {
        currency: {
          include: {
            _count: true,
          },
        },
      },
    });
    return currencies;
  }

  async getStock(productId: number) {
    const stock = await this.prismaService.stock.findFirst({
      where: {
        product: {
          id: productId,
        },
      },
    });
    return stock;
  }

  async findOne(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id },
      include: {
        shop: true,
        currencies: true,
        _count: true,
      },
    });
    return product;
  }

  async getCounts(id: number) {
    const counts = await this.prismaService.product.findMany({
      where: {
        id,
      },
      select: {
        _count: true,
      },
    });
    return counts[0]._count;
  }

  async getShop(productId: number) {
    const shop = await this.prismaService.shop.findFirst({
      where: {
        products: {
          some: {
            id: productId,
          },
        },
      },
      include: {
        _count: true,
      },
    });
    return shop;
  }

  async update(id: number, updateProductInput: ProductUpdateInput) {
    const updatedProduct = await this.prismaService.product.update({
      where: { id },
      data: {
        ...updateProductInput,
      },
    });
    return updatedProduct;
  }

  async remove(id: number) {
    const removedProduct = await this.prismaService.product.delete({
      where: { id },
    });
    return removedProduct;
  }
}
