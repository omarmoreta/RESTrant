const router = require("express").Router();
const Place = require("../models/places");

//GET /places
router.get("/", (req, res) => {
  Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

//POST /places
router.post("/", (req, res) => {
  Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

//GET /places/new
router.get("/new", (req, res) => {
  res.render("places/new");
});

//GET /places/:id
router.get("/:id", (req, res) => {
  this.delete.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

//PUT /:id
router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

//DELETE /places/:id
router.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});

//GET /places/:id/edit
router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

//POST /place/:id/rant
router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

//DELETE /places/:id/rant/:rantId
router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;
