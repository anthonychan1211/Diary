const bcrypt = require("bcrypt");
const User = require("../models/User");

class UserController {
  static async register(req, res) {
    try {
      const data = req.body;
      console.log(data);
      const salt = await bcrypt.genSalt(
        parseInt(process.env.BCRYPT_SALT_ROUNDS)
      );

      data["pass_word"] = await bcrypt.hash(data["pass_word"], salt);

      const result = await User.create(data);
      res.status(201).send(result);
    } catch (err) {
      res.status(400).json({ Error: err.message });
    }
  }
  static async login(req, res) {
    const { username, password } = req.body;
    console.log(username, password);
    try {
      const user = await User.findByUsername(username, password);
      if (user.message === "Login successful") {
        
          const token = await Token.create(user.id);      
          res.status(200).json({ authenticated: true, token: token.token }); //its not going to work

          // const data = req.body;
          // const user = await User.getOneByUsername(data.username)
          // const authenticated = await bcrypt.compare(data.password, user.password);
          // console.log(authenticated, "AUTHENTICATED" );
          // if (!authenticated) {
          //     throw new Error("Incorrect credentials.");
          // } else {
          //     const token = await Token.create(user.id);
          //     res.status(200).json({ authenticated: true, token: token.token });
          // }
      } else {
        res.status(400).json({ message: user.message });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = UserController;
