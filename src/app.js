const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

// Automatically convert bodies to objects
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/restaurants", async (req, res) => {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
});

app.get("/restaurants/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).send("id must be a number");

    const restaurant = await Restaurant.findByPk(id);

    if (restaurant) res.json(restaurant);
    else res.status(404).send("restaurant not found");
});

app.post("/restaurants", async (req, res) => {
    const restaurant = await Restaurant.create(req.body);
    res.json(restaurant);
});

app.put("/restaurants/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) res.status(400).send("id must be a number");

    const restaurant = await Restaurant.findByPk(id);
    const updated = await restaurant.update(req.body);

    res.json(updated);
});

app.delete("/restaurants/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).send("id must be a number");

    const deleted = await Restaurant.findByPk(id);

    if (!deleted)
        return res.status(404).send("restaurant not found");

    await deleted.destroy();

    res.json(deleted);
});


module.exports = app;
