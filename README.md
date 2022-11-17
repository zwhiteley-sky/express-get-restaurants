![logo](https://user-images.githubusercontent.com/44912347/202296600-c5f247d6-9616-49db-88f0-38433429d781.jpg)

# Express Restaurants
Over the next series of lessons we will be building an application using Express that will be able to `GET`, `POST`, `PUT`, and `DELETE` values stored in a database. 

## Setup
After forking and cloning the repository, run the following (`npm run seed` runs the seed file):

```bash
npm install
npm run seed
npm start
```

## Part 1: `GET` Restaurants
1. In the `server.js` file, create a `GET` request using Express for the `/restaurants` endpoint
2. In the `GET` request, return all restaurants via the `Restaurant.findAll()` method. 
    - Remember to use `async` and `await`
    - Note that you will need to run `npm run seed` once in order to put data into the restaurant database.
3. Send the restaurants as a JSON Response (`res.json()`)
4. Test your endpoint by visiting http://localhost:3000/restaurants. Your response should look similar to the one shown below:

![image (26)](https://user-images.githubusercontent.com/44912347/202527699-972e58f4-f0ec-4dda-a3ee-e9def56cf88a.png)

