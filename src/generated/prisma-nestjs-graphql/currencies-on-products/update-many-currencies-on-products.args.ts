import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrenciesOnProductsUpdateManyMutationInput } from './currencies-on-products-update-many-mutation.input';
import { CurrenciesOnProductsWhereInput } from './currencies-on-products-where.input';

@ArgsType()
export class UpdateManyCurrenciesOnProductsArgs {

    @Field(() => CurrenciesOnProductsUpdateManyMutationInput, {nullable:false})
    data!: CurrenciesOnProductsUpdateManyMutationInput;

    @Field(() => CurrenciesOnProductsWhereInput, {nullable:true})
    where?: CurrenciesOnProductsWhereInput;
}
