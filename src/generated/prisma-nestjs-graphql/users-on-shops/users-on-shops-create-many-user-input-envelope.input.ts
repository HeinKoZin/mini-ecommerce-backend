import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnShopsCreateManyUserInput } from './users-on-shops-create-many-user.input';

@InputType()
export class UsersOnShopsCreateManyUserInputEnvelope {

    @Field(() => [UsersOnShopsCreateManyUserInput], {nullable:false})
    data!: Array<UsersOnShopsCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
