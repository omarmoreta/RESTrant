const router = require("express").Router();

//GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "http://placekitten.com/250/250",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "http://placekitten.com/250/250",
    },
  ];

  res.render("places/index", { places });
});

//Places New Page (create form)
//Places Show Page (details page for one place)
//Places Edit Page (edit form)

module.exports = router;
