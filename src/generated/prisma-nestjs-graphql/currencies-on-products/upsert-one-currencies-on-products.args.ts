import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrenciesOnProductsWhereUniqueInput } from './currencies-on-products-where-unique.input';
import { CurrenciesOnProductsCreateInput } from './currencies-on-products-create.input';
import { CurrenciesOnProductsUpdateInput } from './currencies-on-products-update.input';

@ArgsType()
export class UpsertOneCurrenciesOnProductsArgs {

    @Field(() => CurrenciesOnProductsWhereUniqueInput, {nullable:false})
    where!: CurrenciesOnProductsWhereUniqueInput;

    @Field(() => CurrenciesOnProductsCreateInput, {nullable:false})
    create!: CurrenciesOnProductsCreateInput;

    @Field(() => CurrenciesOnProductsUpdateInput, {nullable:false})
    update!: CurrenciesOnProductsUpdateInput;
}
