import { registerEnumType } from '@nestjs/graphql';

export enum ProductStatus {
  AVAILABLE = 'AVAILABLE',
  STOCK_OUT = 'STOCK_OUT',
  PRE_ORDER = 'PRE_ORDER',
}

registerEnumType(ProductStatus, {
  name: 'ProductStatus',
  description: undefined,
});
