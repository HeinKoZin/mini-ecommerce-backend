import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TestService } from './test.service';
import { Test, TestHello } from './entities/test.entity';
import { CreateTestInput } from './dto/create-test.input';
import { UpdateTestInput } from './dto/update-test.input';

@Resolver(() => Test)
export class TestResolver {
  constructor(private readonly testService: TestService) {}

  @Mutation(() => Test)
  createTest(@Args('createTestInput') createTestInput: CreateTestInput): Test {
    return { exampleField: 1, test: 'test' };
  }

  @Query(() => [Test], { name: 'tests', nullable: true })
  findAll(): Test[] {
    return [
      { exampleField: 1, test: 'test' },
      { exampleField: 1, test: 'test' },
    ];
  }

  @Query(() => Test, { name: 'test', nullable: true })
  findOne(@Args('id', { type: () => Int }) id: number): { test: string } {
    return { test: `test ${id}` };
  }

  @Mutation(() => Test)
  updateTest(@Args('updateTestInput') updateTestInput: UpdateTestInput) {
    return this.testService.update(updateTestInput.id, updateTestInput);
  }

  @Mutation(() => Test)
  removeTest(@Args('id', { type: () => Int }) id: number) {
    return this.testService.remove(id);
  }
}
