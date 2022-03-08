import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrenciesOnProductsCreateManyProductInput } from './currencies-on-products-create-many-product.input';

@InputType()
export class CurrenciesOnProductsCreateManyProductInputEnvelope {

    @Field(() => [CurrenciesOnProductsCreateManyProductInput], {nullable:false})
    data!: Array<CurrenciesOnProductsCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
