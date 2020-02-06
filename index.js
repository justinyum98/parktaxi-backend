const express = require('express');
const { connectDatabase } = require('./src/database');
const { applyMiddleware } = require('./src/middleware');
const { initializeAuth } = require('./src/auth');
const spots = require('./src/routes/api/spots');

const app = express();

connectDatabase();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  if ('OPTIONS' == req.method) {
       res.send(200);
   } else {
       next();
   }
});

applyMiddleware(app);
initializeAuth(app);

app.use('/api/spots', spots);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`);
});
