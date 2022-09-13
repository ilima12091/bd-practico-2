const express = require("express");
const mongoose = require("mongoose");

const people = require("./routes/people");
const { APP_PORT, DB_URI } = require("./utils/consts");

mongoose.connect(DB_URI, {
  dbName: "personas_i_lima"
}, () => {
  console.log("Connected to mongoDB");
});

const app = express();

app.use("/people", people);

app.listen(APP_PORT, () => console.log(`Running app on port: ${APP_PORT}`));
