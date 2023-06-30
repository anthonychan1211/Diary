const express = require("express");
const PlayController = require("../controllers/PlayController");
const playRouter = express.Router();

playRouter.get("/", PlayController.getAllPlays);
playRouter.get("/:id", PlayController.getPlayById);
playRouter.post("/", PlayController.createPlay);
playRouter.delete("/:id", PlayController.deletePlay);
playRouter.put("/:id", PlayController.updatePlay);

module.exports = playRouter;
