const app = require("./src/app");
const request = require("supertest");
const seed = require("./seed");
const { seedRestaurant } = require("./seedData");

beforeEach(async () => {
    await seed();
});

test("can get all restaurants", async () => {
    const response = await request(app).get("/restaurants");

    expect(response.body.length).toBe(seedRestaurant.length);

    for (let i = 0; i < response.body.length; ++i) {
        expect(response.body[i]).toMatchObject(seedRestaurant[i]);
    }
});

test("can get one restaurant", async () => {
    const response = await request(app).get("/restaurants/1");
    expect(response.body).toMatchObject(seedRestaurant[0]);
});

test("can create restaurant", async () => {
    const new_data = { name: "Nandos", location: "Stevenage", cuisine: "Fast Food"};

    const response = await request(app)
        .post("/restaurants")
        .send(new_data);
    
    expect(response.body).toMatchObject(new_data);
});

test("can update restaurant", async () => {
    const new_data = { name: "Nandos" };

    const response = await request(app)
        .put("/restaurants/2")
        .send(new_data);

    expect(response.body).toMatchObject({
        ...seedRestaurant[1],
        name: "Nandos",
    });
});

test("can delete restaurant", async () => {
    const response = await request(app)
        .delete("/restaurants/3")
        .send();

    expect(response.body).toMatchObject(seedRestaurant[2]);

    const all_res = await request(app).get("/restaurants");

    expect(all_res.body.length).toBe(2);
});
