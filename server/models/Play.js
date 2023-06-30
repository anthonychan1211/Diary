const db = require('../database/db')

class Play{

    static async getAllPlays(){
        const query = 'SELECT * FROM theatre_plays'
        const {rows} = await db.query(query)
        return rows
    }

    static async getPlayById(id){
        const query = 'SELECT * FROM theatre_plays WHERE play_id = $1'
        const {rows} = await db.query(query,[id])
        return rows[0]
    }

    static async createPlay(play){
        const {play_name, price, date_time_played, duration, cover_photo} = play
        const query = 'INSERT INTO theatre_plays (play_name, price, date_time_played, duration, cover_photo) VALUES ($1, $2, $3, $4, $5) RETURNING *'
        const values = [play_name, price, date_time_played, duration, cover_photo]
        const {rows} = await db.query(query, values)
        return rows[0]
    }

    static async deletePlay(id){
        const query = 'DELETE FROM theatre_plays WHERE play_id = $1'
        await db.query(query,[id])
    }

    static async updatePlay(id,play){
        const {play_name, price, date_time_played, duration, cover_photo} = play
        const query = 'UPDATE theatre_plays SET play_name = $1, price = $2, date_time_played = $3, duration = $4, cover_photo = $5 WHERE play_id = $6 RETURNING *'
        const values = [play_name, price, date_time_played, duration, cover_photo, id]
        const {rows} = await db.query(query, values)
        return rows[0]
    }
}

module.exports = Play