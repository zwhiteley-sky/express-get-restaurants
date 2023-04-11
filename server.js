const app = require("./src/app")
const { sequelize } = require("./db");
const port = 3000;

//TODO: Create your GET Request Route Below: 


app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening at http://localhost:${port}/restaurants`);
})