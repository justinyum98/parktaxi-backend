const express = require("express");
const { connectDatabase } = require("./src/database");
const { applyMiddleware } = require("./src/middleware");
const spots = require("./routes/api/spots");

const app = express();

connectDatabase();
applyMiddleware(app);

app.use("/api/spots", spots);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
