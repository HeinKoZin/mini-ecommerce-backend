import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumProductStatusFieldUpdateOperationsInput } from '../prisma/enum-product-status-field-update-operations.input';
import { CurrenciesOnProductsUncheckedUpdateManyWithoutProductInput } from '../currencies-on-products/currencies-on-products-unchecked-update-many-without-product.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ProductUncheckedUpdateInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: StringFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  quantity?: IntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  product_code?: StringFieldUpdateOperationsInput;

  @Field(() => EnumProductStatusFieldUpdateOperationsInput, { nullable: true })
  status?: EnumProductStatusFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  shopId?: IntFieldUpdateOperationsInput;

  @Field(() => CurrenciesOnProductsUncheckedUpdateManyWithoutProductInput, {
    nullable: true,
  })
  currencies?: CurrenciesOnProductsUncheckedUpdateManyWithoutProductInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}
