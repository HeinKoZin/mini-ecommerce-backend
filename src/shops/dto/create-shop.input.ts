import { ShopCreateInput } from '@generated/prisma-nestjs-graphql/shop/shop-create.input';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateShopInput extends ShopCreateInput {}
