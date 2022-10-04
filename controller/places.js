const router = require("express").Router();

//GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "images/hthaiml.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "images/cafe.jpg",
    },
  ];

  res.render("places/index", { places });
});

//GET /places/new
router.get("/new", (req, res) => {
  res.render("places/new");
});

//POST /places
router.post("/", (req, res) => {
  res.redirect("/places");
});
//Places Show Page (details page for one place)
//Places Edit Page (edit form)

module.exports = router;
