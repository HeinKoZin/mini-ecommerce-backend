import { registerEnumType } from '@nestjs/graphql';

export enum ShopScalarFieldEnum {
  id = 'id',
  name = 'name',
  slug = 'slug',
  address = 'address',
  phone = 'phone',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(ShopScalarFieldEnum, {
  name: 'ShopScalarFieldEnum',
  description: undefined,
});
