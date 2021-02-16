import {Field, ID, ObjectType} from "type-graphql";

@ObjectType({isAbstract: true})
export abstract class BaseEntity<T = Record<string, unknown>> {
  @Field(() => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  // Helpers

  constructor(data?: Partial<T>) {
    if (data) Object.assign(this, data);
  }
}
