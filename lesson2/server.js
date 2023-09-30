const mongoose = require("mongoose");
const app = require("./index");

require("dotenv").config();
const { DB_HOST } = process.env;

mongoose.set("strictQuery", false);

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3001, () => console.log("server ready")))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
