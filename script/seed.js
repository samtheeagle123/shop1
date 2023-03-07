"use strict";

const {
  db,
  models: { User, Product },
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

const users = [
  {
    username: "SmileyPenguin23",
    password: "thorn",
    firstName: "Adrian ",
    lastName: "Greene",
    isAdmin:true
  },
  {
    username: "TechNinja007",
    password: "hunter",
    firstName: "Maya",
    lastName: "Patel",
    isAdmin:false
  },
  {
    username: "HappyTurtle99",
    password: "titan",
    firstName: "Tyler ",
    lastName: " Davis",
    isAdmin:false
  },
  {
    username: "CaptainMarvelous",
    password: "warlock",
    firstName: "Leah  ",
    lastName: "Kim",
    isAdmin:true
  },
  {
    username: "BlueSapphire88",
    password: "void",
    firstName: "Evan",
    lastName: " Nguyen ",
    isAdmin:false,
    
  },
  {
    username: "CosmicFalcon42",
    password: "arc",
    firstName: "Zoe",
    lastName: " Jackson",
    isAdmin:false
  },
  {
    username: "SilverDragonfly",
    password: "solar",
    firstName: "Caleb ",
    lastName: "Smith",
    isAdmin:true
  },
  {
    username: "SkyGazer21",
    password: "stasis",
    firstName: "Ava",
    lastName: " Brown",
    isAdmin:false
  },
  {
    username: "OceanBreeze77",
    password: "strand",
    firstName: "Ryan",
    lastName: " Lee",
    isAdmin:false
  },
  {
    username: "Thunderbolt54",
    password: "light",
    firstName: "Mia",
    lastName: " Thompson",
    isAdmin:true
  },
];


async function seed() {
  await db.sync({ force: true }); 
  console.log("db synced!");

  // Creating Users
  const newUsers = await Promise.all(users.map((user)=>{
    return User.create(user)
  }))
  console.log(`seeded ${newUsers.length} users`);

  console.log(products);

  const productsCreated = await Promise.all(
    products.map(products => Product.create(products))
  );

  console.log(`seeded ${productsCreated.length} products`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
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

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
