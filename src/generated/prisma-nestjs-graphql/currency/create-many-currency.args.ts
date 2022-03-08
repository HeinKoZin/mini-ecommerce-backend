import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrencyCreateManyInput } from './currency-create-many.input';

@ArgsType()
export class CreateManyCurrencyArgs {

    @Field(() => [CurrencyCreateManyInput], {nullable:false})
    data!: Array<CurrencyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
