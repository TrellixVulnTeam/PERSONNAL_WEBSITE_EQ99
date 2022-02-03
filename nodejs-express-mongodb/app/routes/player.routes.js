
module.exports = app => {
    const players = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", players.create);

  
    // Update a Tutorial with id
    // router.put("/:id", tutorials.update);

    // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);
  
    // app.use("/api/players", router);
  };