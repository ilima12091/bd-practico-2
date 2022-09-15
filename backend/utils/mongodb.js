const mongoose = require("mongoose");
const { DB_URI } = require("./consts");

const dbConnect = () => {
  mongoose.connect(
    DB_URI,
    {
      dbName: "personas_i_lima",
    },
    () => {
      console.log("Connected to mongoDB");
    }
  );
};

module.exports = {
  dbConnect,
};
