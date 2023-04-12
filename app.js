const express = require("express");

const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const app = express();

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

const vehicleRouter = require("./routes/vehicleRoute");

app.use(express.json({ extended: true, limit: "10mb" }));

app.use(cookieParser());

app.use(cors());

app.options("*", cors());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});


app.use("/api/v1/vehicles",vehicleRouter)
module.exports = app;
