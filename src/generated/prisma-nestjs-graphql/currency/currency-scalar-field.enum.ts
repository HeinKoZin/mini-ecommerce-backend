import { registerEnumType } from '@nestjs/graphql';

export enum CurrencyScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CurrencyScalarFieldEnum, { name: 'CurrencyScalarFieldEnum', description: undefined })
