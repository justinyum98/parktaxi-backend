const express = require('express');
const { connectDatabase } = require('./src/database');
const { applyMiddleware } = require('./src/middleware');
const { initializeAuth } = require('./src/auth');

const app = express();

connectDatabase();
applyMiddleware(app);
initializeAuth(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`);
});
