import {Authorized, Field, ObjectType} from "type-graphql";
import {Person} from "./person.entity";

@ObjectType()
export class User extends Person<User> {

  @Authorized()
  @Field()
  email: string;

  password: string;

  @Field()
  confirmedEmail?: Date;

  @Field()
  agreedMarketing: boolean;

  @Field()
  agreedStatistics: boolean;

  @Field()
  blocked: boolean;

  @Field()
  forgotPasswordLocked: boolean;

  @Field()
  isTeacher: boolean;

  @Field()
  isAdmin: boolean;
}
