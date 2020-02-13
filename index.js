const express = require('express');
const { connectDatabase } = require('./src/database');
const { applyMiddleware } = require('./src/middleware');
const { initializeAuth } = require('./src/auth');
const lot = require('./src/routes/api/lot');
const spot = require('./src/routes/api/spot');

const app = express();

connectDatabase();
applyMiddleware(app);
initializeAuth(app);

app.use('/api/spots', spot);
app.use('/api/lots', lot);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`);
});
