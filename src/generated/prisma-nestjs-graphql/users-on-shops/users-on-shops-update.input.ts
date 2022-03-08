import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShopUpdateOneRequiredWithoutOwnersInput } from '../shop/shop-update-one-required-without-owners.input';
import { UserUpdateOneRequiredWithoutShopsInput } from '../user/user-update-one-required-without-shops.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UsersOnShopsUpdateInput {

    @Field(() => ShopUpdateOneRequiredWithoutOwnersInput, {nullable:true})
    shop?: ShopUpdateOneRequiredWithoutOwnersInput;

    @Field(() => UserUpdateOneRequiredWithoutShopsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutShopsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    assignedby?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
