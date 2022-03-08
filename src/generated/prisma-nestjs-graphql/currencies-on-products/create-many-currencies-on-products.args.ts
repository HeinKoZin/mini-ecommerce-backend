import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrenciesOnProductsCreateManyInput } from './currencies-on-products-create-many.input';

@ArgsType()
export class CreateManyCurrenciesOnProductsArgs {

    @Field(() => [CurrenciesOnProductsCreateManyInput], {nullable:false})
    data!: Array<CurrenciesOnProductsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
