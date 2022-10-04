//Dependencies
require("dotenv").config();
const viewsEngine = require("express-react-views").createEngine();
const express = require("express");
const placesController = require("./controller/places");
const PORT = process.env.PORT;
const app = express();

//Middleware
app.set("view engine", "jsx");
app.engine("jsx", viewsEngine);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//Contoller
app.use("/places", placesController);

//Routes
app.get("/", (req, res) => {
  res.status(200).render("home");
});

app.get("*", (req, res) => {
  res.status(404).render("error404");
});

app.listen(PORT, () => {
  console.log(`Running on port:${PORT}`);
});
