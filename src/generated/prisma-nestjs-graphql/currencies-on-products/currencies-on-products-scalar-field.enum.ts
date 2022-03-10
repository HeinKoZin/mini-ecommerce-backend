import { registerEnumType } from '@nestjs/graphql';

export enum CurrenciesOnProductsScalarFieldEnum {
  id = 'id',
  sell_price = 'sell_price',
  productId = 'productId',
  currencyId = 'currencyId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(CurrenciesOnProductsScalarFieldEnum, {
  name: 'CurrenciesOnProductsScalarFieldEnum',
  description: undefined,
});
