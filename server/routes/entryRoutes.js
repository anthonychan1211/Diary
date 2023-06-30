const express = require("express");
const EntryController = require("../controllers/EntryController");
const entryRouter = express.Router();

entryRouter.get("/", EntryController.getAllEntries);
entryRouter.get("/:id", EntryController.getEntryById);
entryRouter.post("/", EntryController.createEntry);
entryRouter.delete("/:id", EntryController.deleteEntry);
entryRouter.put("/:id", EntryController.updateEntry);

module.exports = entryRouter;
