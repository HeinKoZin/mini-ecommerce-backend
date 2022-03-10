import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ProductUncheckedUpdateManyWithoutShopInput } from '../product/product-unchecked-update-many-without-shop.input';
import { UsersOnShopsUncheckedUpdateManyWithoutShopInput } from '../users-on-shops/users-on-shops-unchecked-update-many-without-shop.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ShopUncheckedUpdateInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  slug?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  address?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phone?: StringFieldUpdateOperationsInput;

  @Field(() => ProductUncheckedUpdateManyWithoutShopInput, { nullable: true })
  products?: ProductUncheckedUpdateManyWithoutShopInput;

  @Field(() => UsersOnShopsUncheckedUpdateManyWithoutShopInput, {
    nullable: true,
  })
  owners?: UsersOnShopsUncheckedUpdateManyWithoutShopInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}
