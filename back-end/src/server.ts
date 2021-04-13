import express from 'express';
import cors from 'cors';
import compression from 'compression';
import expressPlayGround from 'graphql-playground-middleware-express';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';

import Database from './lib/database';
import environment from './config/environments';
import schema from './schema';

/* === ENVIRONMENT CONFIG === */

if (process.env.NODE_ENV !== 'production') {
  const env = environment;
}
/* ======================================================================== */

async function initServer() {
  const app = express();

  app.use(cors());
  app.use(compression());

  const database = new Database();
  const db = await database.initDatabase();
  const context = { db };

  const server = new ApolloServer({
    schema,
    context,
    introspection: true,
  });

  server.applyMiddleware({ app });

  app.use(
    '/',
    expressPlayGround({
      endpoint: '/graphql',
    })
  );

  const PORT = process.env.PORT || 5000;
  const httpServer = createServer(app);
  server.installSubscriptionHandlers(httpServer);
  httpServer.listen({ port: PORT }, () => {
    console.log(
      `API GraphQL Running on http://localhost:${PORT}${server.graphqlPath}`
    );
    console.log(
      `WebSocket GraphQL Subscription Running on ws://localhost:${PORT}${server.subscriptionsPath}`
    );
  });
}

initServer();
