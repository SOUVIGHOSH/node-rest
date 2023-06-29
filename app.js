const express = require("express");
const feedRouter = require("./routes/feed");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());

//handles cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

app.use("/feed", feedRouter);

app.listen(8080);
