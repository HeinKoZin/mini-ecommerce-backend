import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { ProductUpdateOneRequiredWithoutCurrenciesInput } from '../product/product-update-one-required-without-currencies.input';
import { CurrencyUpdateOneRequiredWithoutProductsInput } from '../currency/currency-update-one-required-without-products.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CurrenciesOnProductsUpdateInput {

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    sell_price?: FloatFieldUpdateOperationsInput;

    @Field(() => ProductUpdateOneRequiredWithoutCurrenciesInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutCurrenciesInput;

    @Field(() => CurrencyUpdateOneRequiredWithoutProductsInput, {nullable:true})
    currency?: CurrencyUpdateOneRequiredWithoutProductsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
