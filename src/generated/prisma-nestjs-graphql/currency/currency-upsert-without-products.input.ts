import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyUpdateWithoutProductsInput } from './currency-update-without-products.input';
import { CurrencyCreateWithoutProductsInput } from './currency-create-without-products.input';

@InputType()
export class CurrencyUpsertWithoutProductsInput {

    @Field(() => CurrencyUpdateWithoutProductsInput, {nullable:false})
    update!: CurrencyUpdateWithoutProductsInput;

    @Field(() => CurrencyCreateWithoutProductsInput, {nullable:false})
    create!: CurrencyCreateWithoutProductsInput;
}
