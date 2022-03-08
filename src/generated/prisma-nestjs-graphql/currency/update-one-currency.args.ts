import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrencyUpdateInput } from './currency-update.input';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';

@ArgsType()
export class UpdateOneCurrencyArgs {

    @Field(() => CurrencyUpdateInput, {nullable:false})
    data!: CurrencyUpdateInput;

    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    where!: CurrencyWhereUniqueInput;
}
