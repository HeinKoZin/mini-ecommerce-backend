import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Test {
  @Field(() => Int, {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  exampleField?: number;

  @Field(() => String, {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  test?: string;
}
