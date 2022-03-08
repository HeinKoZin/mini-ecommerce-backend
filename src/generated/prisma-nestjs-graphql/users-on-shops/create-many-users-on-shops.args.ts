import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersOnShopsCreateManyInput } from './users-on-shops-create-many.input';

@ArgsType()
export class CreateManyUsersOnShopsArgs {

    @Field(() => [UsersOnShopsCreateManyInput], {nullable:false})
    data!: Array<UsersOnShopsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
