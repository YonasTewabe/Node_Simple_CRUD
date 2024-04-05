const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute.js");
const app = express();

//MIDDLEWARE

app.use(express.json());

//ROUTES

app.use("/api/products", productRoute);

mongoose
  .connect("mongodb://127.0.0.1:27017/backenddb")
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("server running on port 3000");
    });
  })
  .catch(() => {
    console.log("failed to connect");
  });
