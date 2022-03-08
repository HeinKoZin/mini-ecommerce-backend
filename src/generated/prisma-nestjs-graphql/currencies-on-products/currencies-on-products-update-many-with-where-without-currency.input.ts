import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrenciesOnProductsScalarWhereInput } from './currencies-on-products-scalar-where.input';
import { CurrenciesOnProductsUpdateManyMutationInput } from './currencies-on-products-update-many-mutation.input';

@InputType()
export class CurrenciesOnProductsUpdateManyWithWhereWithoutCurrencyInput {

    @Field(() => CurrenciesOnProductsScalarWhereInput, {nullable:false})
    where!: CurrenciesOnProductsScalarWhereInput;

    @Field(() => CurrenciesOnProductsUpdateManyMutationInput, {nullable:false})
    data!: CurrenciesOnProductsUpdateManyMutationInput;
}
