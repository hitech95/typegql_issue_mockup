import {Field, InputType, ObjectType} from "type-graphql";
import {BaseEntity} from "./base.entity";

@ObjectType({isAbstract: true})
@InputType("PersonInput", {isAbstract: true})
export abstract class Person<T = Record<string, unknown>> extends BaseEntity<Person<T>> {

  @Field()
  name: string;

  @Field({nullable: true})
  description: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  isTeacher: boolean;

  @Field((type) => String, {nullable: true})
  biography(): string {
    return this.description;
  }

  constructor(data?: Partial<T>) {
    super();
    if (data) Object.assign(this, data);
  }
}