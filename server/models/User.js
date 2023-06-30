const db = require('../database/db')
const bcrypt = require('bcrypt');

class User{

    static async create(user){
        const {username, pass_word } = user
        const query = 'INSERT INTO users (username, pass_word) VALUES ($1, $2) RETURNING *'
        const values = [username, pass_word]
        const {rows} = await db.query(query, values)
        return rows[0]
    }
  
  static async findByUsername(username, password) {
        const user = await db.query('SELECT * FROM users WHERE username = $1', [username]);
  
      if (user.rows.length> 0) {
        const storedPassword = user.rows[0].pass_word;
        const passwordMatch = await bcrypt.compare(password, storedPassword)
        if (passwordMatch) {
          return { message: 'Login successful' };
        } else {
          return { message: 'Invalid password' };
        }
      } else {
        return { message: 'User not found' };
      }
    }
}

module.exports = User