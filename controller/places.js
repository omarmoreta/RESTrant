const router = require("express").Router();
const places = require("../models/places");

//GET /places
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

//GET /places/new
router.get("/new", (req, res) => {
  res.render("places/new");
});

//POST /places
router.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    req.body.pic = "/images/default.jpg";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

//Places Show Page (details page for one place)
//Places Edit Page (edit form)

module.exports = router;
