"use strict";

// Start up DB Server
const { db } = require("./src/auth/models/index.js");

const { start } = require("./src/server");

db.sync()
  .then(() => {
    start();
  })
  .catch(console.error);
