const Entry = require("../models/Entry");

class EntryController {
  static async getAllEntries(req, res) {
    try {
      const data = await Entry.getAllEntries();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: `Internal Server Error - ${error}` });
    }
  }

  static async getEntryByUserId(req, res) {
    const user_id = req.user_id;
    try {
      const entry = await Entry.getEntryByUserId(user_id);
      if (entry) {
        res.status(200).json(entry);
      } else {
        res.status(404).json({ error: `Entry not found` });
      }
    } catch (error) {
      res.status(500).json({ error: `Oops something went wrong - ${error}` });
    }
  }

  static async createEntry(req, res) {
    const entry = req.body;
    try {
      const newEntry = await Entry.createEntry(entry);
      res.status(201).json(newEntry);
    } catch (error) {
      res.status(500).json({ Error: `Error - ${error}` });
    }
  }

  static async deleteEntry(req, res) {
    const { id } = req.params;
    try {
      await Entry.deleteEntry(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ Error: `Error code - ${error}` });
    }
  }

  static async updateEntry(req, res) {
    const { id } = req.params;
    const newEntry = req.body;
    try {
      const entry = await Entry.updateEntry(id, newEntry);
      if (entry) {
        res.status(200).json(entry);
      } else {
        res.status(404).json({ error: `Entry not found` });
      }
    } catch (error) {
      res.status(500).json({ error: `Oops something went wrong - ${error}` });
    }
  }
}

module.exports = EntryController;
