const { Restaurant } = require("./models/index")
const { seedRestaurant } = require("./seedData");
const { sequelize } = require("./db")

const syncSeed = async () => {
    await sequelize.sync({force: true});
    await Restaurant.bulkCreate(seedRestaurant)
    // BONUS: Update with Item and Menu bulkCreate


}

syncSeed()