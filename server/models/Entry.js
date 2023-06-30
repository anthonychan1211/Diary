const db = require('../database/db')

class Entry{

    static async getAllEntries(){
        const query = 'SELECT * FROM diary_entries'
        const {rows} = await db.query(query)
        return rows
    }

    static async getEntryById(id){
        const query = 'SELECT * FROM diary_entries WHERE entry_id = $1'
        const {rows} = await db.query(query,[id])
        return rows[0]
    }

    static async createEntry(entry){
        const {text, category ,date_time_entry} = entry
        const query = 'INSERT INTO diary_entries (text, category, date_time_entry) VALUES ($1, $2, $3) RETURNING *'
        const values = [text, category, date_time_entry]
        const {rows} = await db.query(query, values)
        return rows[0]
    }

    static async deleteEntry(id){
        const query = 'DELETE FROM diary_entries WHERE entry_id = $1'
        await db.query(query,[id])
    }

    static async updateEntry(id,entry){
        const {text, category, date_time_entry} = entry
        const query = 'UPDATE diary_entries SET text = $1, text = $2, category = $3, duration = $4, date_time_entry = $5 WHERE entry_id = $6 RETURNING *'
        const values = [text, category, date_time_entry]
        const {rows} = await db.query(query, values)
        return rows[0]
    }
}

module.exports = Entry
