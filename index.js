require("dotenv").config();
const express = require("express");
const placesController = require("./controller/places");
const PORT = process.env.PORT;
const app = express();

//Middleware

app.use("/places", placesController);

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(PORT, () => {
  console.log(`Running on port:${PORT}`);
});
