const mongoose = require("mongoose");
const db = require("../models");

// This file empties the pets collection and inserts the pets below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/petsDB"
);
const petSeed = 

[{
  name: "Roberta",
  status: "pending",
  species: "dog"
},
{
   name: "Salinger",
   species: "lizard",
   status: "available",
 },
{  
  name: "Lilly",
  status: "pending",
  species: "kitten"
},  
{
  name: "Karl",
  status: "pending",
  species: "mouse"
},  
{
  name: "Billy",
  status: "available",
  species: "dog"
},
{  
  name: "Teddy",
  species: "king fish",
  status: "available"
},
{  
  name: "Shelly",
  status: "pending",
  species: "cat"
},  
{
  name: "Loli",
  status: "pending",
  species: "dog"
},
{
  name: "Sandy",
  status: "sold",
  species: "kitten"
},
{
  name: "Jilli",
  status: "available",
  species: "dog"
},
{
  name: "Sunny",
  status: "pending",
  species: "cat"
},
{
  name: "Annie",
  status: "available",
  species: "cat"
},
{
  name: "Andy",
  status: "available",
  species: "cat"
},
{
  name: "Rick",
  status: "pending",
  species: "cat"
},
{
  name: "Jack",
  status: "pending",
  species: "dog"
},
  {
  name: "Rob",
  status: "available",
  species: "cat"
},
{
   name: "Salinger",
   species: "lizard",
   status: "available",
 },
 {
   name: "Amazon",
   species: "dog",
   status: "available"  },
 {
   name: "Total Recall",
   species: "rat",
   status: "pending",
 },
 {
   name: "Elon Musk",
   species: "rabbit",
   status: "pending",
 },
 {
   name: "Steve Dogs",
   species: "dog",
   status: "available",
 },
 {
   name: "Astrophysics",
   species: "raven",
   status: "pending",
 },
 {
   name: "George 1984",
   species: "dog",
   status: "available",
 },
 {
   name: "Frankenstein",
   species: "cat",
   status: "available",
 },
 {
   name: "Great Gatsby",
   species: "cat",
   status: "pending",
 },
 {
   name: "Crime Stories",
   species: "bulldog",
   status: "sold",
 }
];


db.Pet
  .remove({})
  .then(() => db.Pet.collection.insertMany(petSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
