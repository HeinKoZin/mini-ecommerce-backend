import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { CurrencyCreateInput } from './currency-create.input';
import { CurrencyUpdateInput } from './currency-update.input';

@ArgsType()
export class UpsertOneCurrencyArgs {

    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    where!: CurrencyWhereUniqueInput;

    @Field(() => CurrencyCreateInput, {nullable:false})
    create!: CurrencyCreateInput;

    @Field(() => CurrencyUpdateInput, {nullable:false})
    update!: CurrencyUpdateInput;
}
