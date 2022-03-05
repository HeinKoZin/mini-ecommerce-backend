import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createProductInput: CreateProductInput) {
    const createdProduct = await this.prismaService.product.create({
      data: {
        ...createProductInput,
      },
    });
    return createdProduct;
  }

  async findAll() {
    const products = await this.prismaService.product.findMany({});
    return products;
  }

  async findOne(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id },
    });
    console.log(product);
    return product;
  }

  async update(id: number, updateProductInput: UpdateProductInput) {
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
