const mongoose = require("mongoose");

const connectToDb = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(console.log("database is created"));
};
module.exports = connectToDb;
