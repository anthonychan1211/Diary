const express = require("express");
const EntryController = require("../controllers/EntryController");
const authenticator = require("../middleware/authenticator");
const entryRouter = express.Router();

// entryRouter.get("/", authenticator, EntryController.getAllEntries);
entryRouter.get("/", authenticator, EntryController.getEntryByUserId);
entryRouter.post("/", authenticator, EntryController.createEntry);
entryRouter.delete("/:id", authenticator, EntryController.deleteEntry);
entryRouter.put("/:id", authenticator, EntryController.updateEntry);

module.exports = entryRouter;
