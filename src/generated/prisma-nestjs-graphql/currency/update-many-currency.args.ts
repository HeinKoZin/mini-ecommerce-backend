import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrencyUpdateManyMutationInput } from './currency-update-many-mutation.input';
import { CurrencyWhereInput } from './currency-where.input';

@ArgsType()
export class UpdateManyCurrencyArgs {

    @Field(() => CurrencyUpdateManyMutationInput, {nullable:false})
    data!: CurrencyUpdateManyMutationInput;

    @Field(() => CurrencyWhereInput, {nullable:true})
    where?: CurrencyWhereInput;
}
