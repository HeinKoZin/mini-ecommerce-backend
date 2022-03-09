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
        currencies: true,
      },
      take,
      orderBy: {
        id: 'desc',
      },
    });
    // console.log(products);
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
        currency: true,
      },
    });

    return currencies;
  }

  async findOne(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id },
      include: {
        shop: true,
        currencies: true,
      },
    });
    // console.log(product);
    return product;
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

  remove(id: number) {
    const removedProduct = this.prismaService.product.delete({
      where: { id },
    });
    return removedProduct;
  }
}
