const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfull...");
  });

const port = process.env.PORT || 3002;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
