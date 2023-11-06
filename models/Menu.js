
const Sequelize = require("sequelize");
const db = require("../db/connection");

const Menu = db.define("menu", {
    name: Sequelize.STRING,
})

module.exports = Menu;
