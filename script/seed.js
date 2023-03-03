'use strict'

const {db, models: {User, Products } } = require('../server/db')

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const generatePass = (len) => {
  let result = "";
  for (let i = 0; i < len; i++)
  result += characters.charAt(0, characters.length - 1);
  return result;
}
const users = [
  {
    username:'SmileyPenguin23',
    firstName:'Adrian ',
    lastName:'Greene',
  },
  {
    username:'TechNinja007',
    firstName:'Maya',
    lastName:'Patel',
  },
  {
    username:'HappyTurtle99',
    firstName:'Tyler ',
    lastName:' Davis',
  },
  {
    username:'CaptainMarvelous',
    firstName:'Leah  ',
    lastName:'Kim',
  },
  {
    username:'BlueSapphire88',
    firstName:'Evan',
    lastName:' Nguyen ',
  },
  {
    username:'CosmicFalcon42',
    firstName:'Zoe',
    lastName:' Jackson',
  },
  {
    username:'SilverDragonfly',
    firstName:'Caleb ',
    lastName:'Smith',
  },
  {
    username:'SkyGazer21',
    firstName:'Ava',
    lastName:' Brown',
  },
  {
    username:'OceanBreeze77',
    firstName:'Ryan',
    lastName:' Lee',
  },
  {
    username:'Thunderbolt54',
    firstName:'Mia',
    lastName:' Thompson',
  },
]

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

const roles = ['ADMIN','DEVELOPER', 'CUSTOMER']

users.forEach((m) => {
  m.role = roles[0, roles.length - 1];
  m.password = generatePass(10);
});
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])
  
  const productsCreated = await Promise.all(
    products.map(products => Products.create(products))
  );

  console.log(`seeded ${productsCreated.length} products`);
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
