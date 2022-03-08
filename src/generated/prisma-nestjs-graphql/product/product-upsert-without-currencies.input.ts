import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutCurrenciesInput } from './product-update-without-currencies.input';
import { ProductCreateWithoutCurrenciesInput } from './product-create-without-currencies.input';

@InputType()
export class ProductUpsertWithoutCurrenciesInput {

    @Field(() => ProductUpdateWithoutCurrenciesInput, {nullable:false})
    update!: ProductUpdateWithoutCurrenciesInput;

    @Field(() => ProductCreateWithoutCurrenciesInput, {nullable:false})
    create!: ProductCreateWithoutCurrenciesInput;
}
