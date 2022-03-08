import { registerEnumType } from '@nestjs/graphql';

export enum UserType {
    ADMIN = "ADMIN",
    USER = "USER"
}


registerEnumType(UserType, { name: 'UserType', description: undefined })
