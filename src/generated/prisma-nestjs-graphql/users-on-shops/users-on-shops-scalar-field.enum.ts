import { registerEnumType } from '@nestjs/graphql';

export enum UsersOnShopsScalarFieldEnum {
  shopId = 'shopId',
  userId = 'userId',
  assignedby = 'assignedby',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(UsersOnShopsScalarFieldEnum, {
  name: 'UsersOnShopsScalarFieldEnum',
  description: undefined,
});
