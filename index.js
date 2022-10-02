const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(PORT, () => {
  console.log(`Running on port:${PORT}`);
});
