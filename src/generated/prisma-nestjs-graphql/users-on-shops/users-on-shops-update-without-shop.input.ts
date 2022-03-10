import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutShopsInput } from '../user/user-update-one-required-without-shops.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UsersOnShopsUpdateWithoutShopInput {
  @Field(() => UserUpdateOneRequiredWithoutShopsInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutShopsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  assignedby?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}
