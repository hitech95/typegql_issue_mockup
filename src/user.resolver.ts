import {FieldResolver, Resolver, Root,} from "type-graphql";

import {User} from "./user.entity";

@Resolver(() => User)
export class UserResolver {

  // FIELD RESOLVERS

  @FieldResolver(() => String)
  name(@Root() user: User): Promise<string> {
    return Promise.resolve(`${user.firstName} ${user.lastName}`);
  }

}
