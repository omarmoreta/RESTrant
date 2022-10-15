require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`connected to db:${MONGO_URI}`);
  }
);

module.exports.Place = require("./places");
module.exports.Comment = require("./comments");
