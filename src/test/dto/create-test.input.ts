import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTestInput {
  @Field(() => Int, {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  exampleField?: number;

  @Field(() => String, {
    description: 'Test field (placeholder)',
    nullable: true,
  })
  test?: string;
}
