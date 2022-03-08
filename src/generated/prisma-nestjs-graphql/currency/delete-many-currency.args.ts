import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrencyWhereInput } from './currency-where.input';

@ArgsType()
export class DeleteManyCurrencyArgs {

    @Field(() => CurrencyWhereInput, {nullable:true})
    where?: CurrencyWhereInput;
}
