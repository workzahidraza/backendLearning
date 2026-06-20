require("dotenv").config();
const app = require("./src/app");
const connectToDb = require("./src/config/database");

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is started at port ${port}`);
  connectToDb();
});
