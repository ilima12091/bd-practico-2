const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const people = require("./routes/people");
const { APP_PORT, DB_URI } = require("./utils/consts");
const { dbConnect } = require("./utils/mongodb");

dbConnect();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/people", people);

app.listen(APP_PORT, () => console.log(`Running app on port: ${APP_PORT}`));
