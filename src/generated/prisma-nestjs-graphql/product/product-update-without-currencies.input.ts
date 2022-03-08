import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ShopUpdateOneRequiredWithoutProductsInput } from '../shop/shop-update-one-required-without-products.input';
import { EnumProductStatusFieldUpdateOperationsInput } from '../prisma/enum-product-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ProductUpdateWithoutCurrenciesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    product_code?: StringFieldUpdateOperationsInput;

    @Field(() => ShopUpdateOneRequiredWithoutProductsInput, {nullable:true})
    shop?: ShopUpdateOneRequiredWithoutProductsInput;

    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumProductStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
