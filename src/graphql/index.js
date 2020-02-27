const { ApolloServer } = require('apollo-server-express');
const { buildContext } = require('graphql-passport');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { initializeCors } = require('../cors');

const mountGraphQLMiddleware = (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => buildContext({ req, res })
  });
  const corsOptions = initializeCors();

  server.applyMiddleware({ app, cors: corsOptions });

  return { app, server };
};

module.exports = { mountGraphQLMiddleware };
