"use strict";

const {
  db,
  models: { User, Products },
  
} = require("../server/db");

const products = [
  {
    Name: "James",
    Desc: "my name is pepe",
    SKU: 1,
    Price: 128,
    imageUrl: "pepe/1.png",
  },
  {
    Name: "Sarah",
    Desc: "my name is susan",
    SKU: 2,
    Price: 250,
    imageUrl: "pepe/2.jpg",
  },
  {
    Name: "Michael",
    Desc: "my name is mike",
    SKU: 3,
    Price: 300,
    imageUrl: "pepe/3.jpg",
  },
  {
    Name: "Linda",
    Desc: "my name is lindsey",
    SKU: 4,
    Price: 99,
    imageUrl: "pepe/4.jpg",
  },
  {
    Name: "David",
    Desc: "my name is dave",
    SKU: 5,
    Price: 199,
    imageUrl: "pepe/5.png",
  },
  {
    Name: "Emily",
    Desc: "my name is emma",
    SKU: 6,
    Price: 149,
    imageUrl: "pepe/6.jpg",
  },
  {
    Name: "John",
    Desc: "my name is jonny",
    SKU: 7,
    Price: 79,
    imageUrl: "pepe/7.png",
  },
  {
    Name: "Samantha",
    Desc: "my name is sam",
    SKU: 8,
    Price: 399,
    imageUrl: "pepe/8.jpg",
  },
  {
    Name: "Ryan",
    Desc: "my name is ron",
    SKU: 9,
    Price: 179,
    imageUrl: "pepe/9.png",
  },
  {
    Name: "Olivia",
    Desc: "my name is ollie",
    SKU: 10,
    Price: 599,
    imageUrl: "pepe/10.png",
  },
];
async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

  console.log(`seeded ${users.length} users`);

  const productsCreated = await Promise.all(
    products.map(products => Products.create(products))
  );

  console.log(`seeded ${productsCreated.length} products`);

  console.log("seeded successfully");
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
