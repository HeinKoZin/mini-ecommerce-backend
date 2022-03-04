import { InputType, Field } from '@nestjs/graphql';
import { Shop } from '@shops/entities/shop.entity';

@InputType()
export class CreateShopInput implements CreateShopInputType {
  @Field(() => String, { description: 'Shop name field' })
  name: string;

  @Field(() => String, { description: 'Shop address field' })
  address: string;

  @Field(() => String, { description: 'Shop phone field' })
  phone: string;
}

type CreateShopInputType = Omit<Shop, 'id' | 'createdAt' | 'updatedAt'>;
