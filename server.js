const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

app.get("/restaurants", async (req, res) => {
  //TODO: Write your solution below
})

app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})