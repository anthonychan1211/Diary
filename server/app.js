const express = require("express");
const cors = require("cors");
// const UserController = require("./controllers/UserController");
const entryRoutes = require("./routes/entryRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();
const logRoutes = require('./middleware/logger');

app.use(cors());
app.use(express.json());
api.use(logRoutes);

app.use("/entries", entryRoutes);
app.use("/users", userRoutes);
// app.post("/register", UserController.register);
// app.post("/login", UserController.login);
module.exports = app;
