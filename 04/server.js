const app = require("./src/app");

const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      "mongodb://zahid:vfuVScCJWYAZcDFL@ac-2qbt8je-shard-00-00.ig8bwck.mongodb.net:27017,ac-2qbt8je-shard-00-01.ig8bwck.mongodb.net:27017,ac-2qbt8je-shard-00-02.ig8bwck.mongodb.net:27017/?ssl=true&replicaSet=atlas-1zs1x1-shard-0&authSource=admin&appName=Cluster0",
    )
    .then(() => {
      console.log("database is connected");
    });
}

connectToDb();
app.listen(3000, () => {
  console.log("server is started");
});
