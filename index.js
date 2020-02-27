const express = require('express');
const { connectDatabase } = require('./src/database');
const { initializeAuth } = require('./src/auth');
const { mountGraphQLMiddleware } = require('./src/graphql');

const app = express();

connectDatabase();
initializeAuth(app);
const { server } = mountGraphQLMiddleware(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  console.log(
    `GraphQL server ready at http://localhost:5000${server.graphqlPath}`
  );
});
