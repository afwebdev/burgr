const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

//GET BURGERS
//GET: /api/burgers
router.get("/", (req, resp) => {
  burger.all(res => {
    resp.send(res);
  });
});

//ADD NEW BURGER
//POST: /api/burgers
router.post("/", (req, resp) => {
  let burgerName = req.body.burger_name;
  burger.add(burgerName, function(result) {
    resp.send("Burger Added").status(201);
  });
});

//UPDATE BURGER (devoured = 1)
//PUT: /api/burgers
router.put("/:id", (req, resp) => {
  let id = req.params.id;
  burger.update(id, function(result) {
    resp.sendStatus(201);
  });
});

module.exports = router;
