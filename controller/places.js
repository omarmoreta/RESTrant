const router = require("express").Router();

//GET /places
router.get("/", (req, res) => {
  res.send("GET /places");
});

module.exports = router;
