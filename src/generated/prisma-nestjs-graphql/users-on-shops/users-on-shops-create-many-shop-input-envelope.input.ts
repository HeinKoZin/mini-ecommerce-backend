import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnShopsCreateManyShopInput } from './users-on-shops-create-many-shop.input';

@InputType()
export class UsersOnShopsCreateManyShopInputEnvelope {

    @Field(() => [UsersOnShopsCreateManyShopInput], {nullable:false})
    data!: Array<UsersOnShopsCreateManyShopInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
