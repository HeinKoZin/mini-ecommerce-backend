import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CurrenciesOnProductsUpdateManyWithoutCurrencyInput } from '../currencies-on-products/currencies-on-products-update-many-without-currency.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CurrencyUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  code?: StringFieldUpdateOperationsInput;

  @Field(() => CurrenciesOnProductsUpdateManyWithoutCurrencyInput, {
    nullable: true,
  })
  products?: CurrenciesOnProductsUpdateManyWithoutCurrencyInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}
