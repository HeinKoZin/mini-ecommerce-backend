import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrencyCreateInput } from './currency-create.input';

@ArgsType()
export class CreateOneCurrencyArgs {

    @Field(() => CurrencyCreateInput, {nullable:false})
    data!: CurrencyCreateInput;
}
