// Most of the code for this file was learned in 13-MVC, Activity 17-CatsApp, Solved, catsControllers.js
// Universal variables allow the file to use "express" and express.Router
const express = require("express");
const router = express.Router();
// Imports from model "burger.js" 
const burger = require("../models/burger");

router.get("/", function(req, res) {
  burger.selectAllBurgers(function(data) {
    const hdbrsObj = {
      burgers: data
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  });

  router.post("/api/burgers", function(req, res) {
    burger.addBurger(
      ["burger_name", "devoured"],
      [req.body.burger_name, req.body.devoured],
      function(result) {
        // Send back the ID of new burger
        res.json({ id: result.insertId });
      }
    );
  });

  router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateBurger({ devoured: req.body.devoured }, condition, function(
      result
    ) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  router.delete("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);
  });
});
module.exports = router;
