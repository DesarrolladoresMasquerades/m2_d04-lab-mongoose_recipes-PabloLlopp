const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = `mongodb+srv://${process.env.MG_USERNAME}:${process.env.MG_PASSWORD}@satana.uafa6.mongodb.net/recipe-app?retryWrites=true&w=majority`;

// Connection to the database "recipe-app"
/* CREATING ONE RECIPE
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    Recipe.create({
      "title": "Asian Glazed Chicken Thighs",
      "level": "Amateur Chef",
      "ingredients": [
        "1/2 cup rice vinegar",
        "5 tablespoons honey",
        "1/3 cup soy sauce (such as Silver Swan®)",
        "1/4 cup Asian (toasted) sesame oil",
        "3 tablespoons Asian chili garlic sauce",
        "3 tablespoons minced garlic",
        "salt to taste",
        "8 skinless, boneless chicken thighs"
      ],
      "cuisine": "Asian",
      "dishType": "main_course",
      "image": "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
      "duration": 40,
      "creator": "Chef LePapu"
    })
    .then((data) => {console.log(data.title)})
    
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
*/

// CREATING MANY RECIPES

mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    //return Recipe.deleteMany()
    Recipe
   // .insertMany(data, data.forEach((recipe)=>{console.log(recipe.title)}))
   // .findOneAndUpdate({title: {$eq: "Rigatoni alla Genovese"}}, {$set: {duration: 100}}, {new: true})
   // .then(console.log("Hooray! Duration changed"))
   // .deleteOne({title: "Carrot Cake"}, {new: true})
   // .then(console.log("The recipe has been removed!"))
    .then(mongoose.connection.close())
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });