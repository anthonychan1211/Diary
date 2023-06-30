const db = require("../database/db");

class Entry {
  static async getAllEntries() {
    const query = "SELECT * FROM diary_entries";
    const { rows } = await db.query(query);
    return rows;
  }

  static async getEntryByUserId(id) {
    const query = "SELECT * FROM diary_entries WHERE user_id = $1";
    const { rows } = await db.query(query, [id]);
    return rows;
  }

  static async createEntry(entry) {
    const { content, category } = entry;
    const query =
      "INSERT INTO diary_entries (content, category) VALUES ($1, $2) RETURNING *";
    const values = [content, category];
    const { rows } = await db.query(query, values);
    return rows[0];
  }

  static async deleteEntry(id) {
    const query = "DELETE FROM diary_entries WHERE entry_id = $1";
    await db.query(query, [id]);
  }

  static async updateEntry(id, entry) {
    const { content, category, date_time_entry, entry_id } = entry;
    const query =
      "UPDATE diary_entries SET content = $1, category = $2, date_time_entry = $3 WHERE entry_id = $4 RETURNING *";
    const values = [content, category, date_time_entry, entry_id];
    const { rows } = await db.query(query, values);
    return rows[0];
  }
}

module.exports = Entry;
