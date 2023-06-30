const express = require("express");
const cors = require("cors");
// const UserController = require("./controllers/UserController");
const playRoutes = require("./routes/playRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/plays", playRoutes);
app.use("/users", userRoutes);
// app.post("/register", UserController.register);
// app.post("/login", UserController.login);
module.exports = app;
