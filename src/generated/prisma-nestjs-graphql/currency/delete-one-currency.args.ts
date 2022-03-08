import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';

@ArgsType()
export class DeleteOneCurrencyArgs {

    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    where!: CurrencyWhereUniqueInput;
}
