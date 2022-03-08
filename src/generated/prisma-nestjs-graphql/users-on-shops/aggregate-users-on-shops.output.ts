import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UsersOnShopsCountAggregate } from './users-on-shops-count-aggregate.output';
import { UsersOnShopsAvgAggregate } from './users-on-shops-avg-aggregate.output';
import { UsersOnShopsSumAggregate } from './users-on-shops-sum-aggregate.output';
import { UsersOnShopsMinAggregate } from './users-on-shops-min-aggregate.output';
import { UsersOnShopsMaxAggregate } from './users-on-shops-max-aggregate.output';

@ObjectType()
export class AggregateUsersOnShops {

    @Field(() => UsersOnShopsCountAggregate, {nullable:true})
    _count?: UsersOnShopsCountAggregate;

    @Field(() => UsersOnShopsAvgAggregate, {nullable:true})
    _avg?: UsersOnShopsAvgAggregate;

    @Field(() => UsersOnShopsSumAggregate, {nullable:true})
    _sum?: UsersOnShopsSumAggregate;

    @Field(() => UsersOnShopsMinAggregate, {nullable:true})
    _min?: UsersOnShopsMinAggregate;

    @Field(() => UsersOnShopsMaxAggregate, {nullable:true})
    _max?: UsersOnShopsMaxAggregate;
}
