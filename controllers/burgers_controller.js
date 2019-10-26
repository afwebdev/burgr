const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

//GET: /api/burgers
router.get("/", (req, resp) => {
  burger.all(result => {
    resp.render("mainPage", { layout: "main" });
  });
});

//POST: /api/burgers
router.post("/", (req, resp) => {
  let burgerName = req.body.burger_name;
  burger.add(burgerName, function(result) {
    resp.sendStatus(200);
  });
});

//PUT: /api/burgers
router.put("/", (req, resp) => {
  burger.update(req.body, function(result) {
    resp.sendStatus(201);
  });
});

module.exports = router;
