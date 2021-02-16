import {Args, Authorized, Ctx, Mutation, Query, Resolver,} from "type-graphql";
import {AuthResponse} from "./auth.response";
import {User} from "./user.entity";

@Resolver(() => AuthResponse)
export class AuthResolver {

  // ME
  @Query(() => User, {nullable: true})
  async me(): Promise<User> {
    return new User({
      id: "redactedID",
      createdAt: new Date(),
      updatedAt: new Date(),
      firstName: 'Nicolò',
      lastName: 'Veronese',
      email: 'mymail@example.com',
      password: 'password-hash',
      confirmedEmail: new Date(),
      blocked: false,
      forgotPasswordLocked: false,
      isAdmin: true,
    });
  }

  // LOGIN
  @Mutation(() => AuthResponse)
  async login(): Promise<AuthResponse> {
    const user = new User({
      id: "redactedID",
      createdAt: new Date(),
      updatedAt: new Date(),
      firstName: 'Nicolò',
      lastName: 'Veronese',
      email: 'mymail@example.com',
      password: 'password-hash',
      confirmedEmail: new Date(),
      blocked: false,
      forgotPasswordLocked: false,
      isAdmin: true,
    });
    return {user, accessToken: "accessToken", refreshToken: "refreshToken"};
  }
}
