const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const app = express();

const  router =require ("../route/route.js");

const connect = () => {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/testDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err));
};

connect();
app.use(express.json());
app.use("/", router);

// app.use(bodyParser.json({ limit: "50mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb", extended: true }));

app.listen(5000, () => {
  console.log("app is running on 5000");
});

