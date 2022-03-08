import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { ProductUpdateOneRequiredWithoutCurrenciesInput } from '../product/product-update-one-required-without-currencies.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CurrenciesOnProductsUpdateWithoutCurrencyInput {

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    sell_price?: FloatFieldUpdateOperationsInput;

    @Field(() => ProductUpdateOneRequiredWithoutCurrenciesInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutCurrenciesInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
