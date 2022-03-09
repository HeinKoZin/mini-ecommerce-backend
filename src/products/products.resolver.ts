import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { ProductCreateInput } from '@dtos/product/product-create.input';
import { ProductUpdateInput } from '@dtos/product/product-update.input';
import { Product } from '@dtos/product/product.model';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: ProductCreateInput,
  ) {
    return this.productsService.create(createProductInput);
  }

  @Query(() => [Product], { name: 'products' })
  findAll(@Args('take', { type: () => Int, nullable: true }) take?: number) {
    return this.productsService.findAll(take);
  }

  @ResolveField()
  async currencies(@Parent() product: Product) {
    // console.log(product.currencies);
    return await this.productsService.getCurrencies(product.id);
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductInput') updateProductInput: ProductUpdateInput,
    @Args('id') id: number,
  ) {
    return this.productsService.update(id, updateProductInput);
  }

  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.remove(id);
  }
}
