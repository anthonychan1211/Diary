const Token = require("../models/Token");
const User = require("../controllers/user.js");


async function authenticator(req, res, next) {
    try {
        const userToken = req.headers.authorization;
        

        if (userToken == "null") {
            throw new Error("User not authenticated.");
        } else {
            
            const validToken = await Token.getOneByToken(userToken);

            // if (!validToken) {
            //   throw new Error('Invalid token.');
            // }
      
            next();
          }        

    } catch (err) {
        res.status(403).json({ error: err.message });
    }
}

module.exports = authenticator
