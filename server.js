const app = require("./src/app")
const db = require("./db/connection");
const seed = require("./seed");
const port = 3000;

//TODO: Create your GET Request Route Below: 


seed().then(() => { app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/restaurants`);
})});
