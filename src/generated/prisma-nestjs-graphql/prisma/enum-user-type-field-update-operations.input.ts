import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserType } from './user-type.enum';

@InputType()
export class EnumUserTypeFieldUpdateOperationsInput {

    @Field(() => UserType, {nullable:true})
    set?: keyof typeof UserType;
}
