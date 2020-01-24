const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { initializeCors } = require("./cors");

const applyMiddleware = app => {
  app.use(express.static("public"));
  app.use(initializeCors());
  //app.use(session({ secret: process.env.SESSION_SECRET }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());
};

module.exports = {
  applyMiddleware
};
