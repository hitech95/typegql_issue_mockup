import {ObjectType, Field} from "type-graphql";
import {User} from "./user.entity";

@ObjectType()
export class AuthResponse {
  @Field()
  user: User;

  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;
}
