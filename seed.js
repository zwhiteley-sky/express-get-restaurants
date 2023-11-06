const { Restaurant, Menu, Item } = require("./models/index")
const { seedRestaurant, seedMenu, seedItem } = require("./seedData");
const db = require("./db/connection")

const syncSeed = async () => {
    await db.sync({ force: true });
    await Restaurant.bulkCreate(seedRestaurant)
    await Menu.bulkCreate(seedMenu);
    await Item.bulkCreate(seedItem);

    for (let i = 0; i < 3; ++i) {
        const menu = await Menu.findByPk(i + 1);
        const item = await Item.findByPk(i + 1);
        await menu.addItem(item);
    }
}

module.exports = syncSeed;
