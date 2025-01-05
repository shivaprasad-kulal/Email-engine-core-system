const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const emailRoutes = require("./routes/emailRoutes");



const app = express();
app.use(bodyParser.json());
app.use("/api", authRoutes);
app.use("/api", emailRoutes);

module.exports = app;
