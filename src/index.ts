import "reflect-metadata";
import "dotenv/config";
import {Container, Service} from "typedi";
import {ApolloServer} from "apollo-server-express";
import {buildSchema} from "type-graphql";
import {AuthResolver} from "./auth.resolver";
import {UserResolver} from "./user.resolver";
import express from "express";
import http, {Server as HServer} from "http";
import {authChecker} from "./auth-checker";

@Service()
class AppServer {

  private readonly _app: express.Application;
  private readonly _httpServer: HServer;

  constructor() {
    this._app = express().enable("trust proxy");
    this._httpServer = http.createServer(this._app);

    this.bootstrap();
  }

  async bootstrap() {
    // build TypeGraphQL executable schema
    const schema = await buildSchema({
      authChecker,
      authMode: "null",
      resolvers: [AuthResolver, UserResolver],
    });

    // Create GraphQL server
    const apolloServer = new ApolloServer({
      schema,
    });

    apolloServer.applyMiddleware({
      app: this.app,
      path: "/",
    });

    // Start the server
    this._httpServer.listen(4000, () =>
      console.log(`Server started at http://localhost:${4000} 🚀`)
    );
  }

  protected get app(): express.Application {
    return this._app;
  }

}

Container.get(AppServer);
