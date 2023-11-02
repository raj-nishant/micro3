// Import the JSON data
const foodData = require("./food.json");

// Function to list all the food items
function listAllFoodItems(data) {
  return data.map((item) => item.foodname);
}

// Function to list all the food items with category vegetables
function listFoodItemsWithCategoryVegetables(data) {
  return data.filter((item) => item.category === "Vegetable");
}

// Function to list all the food items with category fruit
function listFoodItemsWithCategoryFruit(data) {
  return data.filter((item) => item.category === "Fruit");
}

// Function to list all the food items with category protein
function listFoodItemsWithCategoryProtein(data) {
  return data.filter((item) => item.category === "Protein");
}

// Function to list all the food items with category nuts
function listFoodItemsWithCategoryNuts(data) {
  return data.filter((item) => item.category === "Nuts");
}

// Function to list all the food items with category grains
function listFoodItemsWithCategoryGrains(data) {
  return data.filter((item) => item.category === "Grain");
}

// Function to list all the food items with category dairy
function listFoodItemsWithCategoryDairy(data) {
  return data.filter((item) => item.category === "Dairy");
}

// Function to list all the food items with calorie above 100
function listFoodItemsWithCalorieAbove100(data) {
  return data.filter((item) => item.calorie > 100);
}

// Function to list all the food items with calorie below 100
function listFoodItemsWithCalorieBelow100(data) {
  return data.filter((item) => item.calorie < 100);
}

// Function to list all the food items with highest protein content to lowest
function listFoodItemsWithHighestProteinContentToLowest(data) {
  return data.sort((item1, item2) => item2.protiens - item1.protiens);
}

// Function to list all the food items with lowest cab content to highest
function listFoodItemsWithLowestCarbContentToHighest(data) {
  return data.sort((item1, item2) => item1.cab - item2.cab);
}

// Print the results
console.log("All food items:", listAllFoodItems(foodData));
console.log(
  "Food items with category vegetables:",
  listFoodItemsWithCategoryVegetables(foodData)
);
console.log(
  "Food items with category fruit:",
  listFoodItemsWithCategoryFruit(foodData)
);
console.log(
  "Food items with category protein:",
  listFoodItemsWithCategoryProtein(foodData)
);
console.log(
  "Food items with category nuts:",
  listFoodItemsWithCategoryNuts(foodData)
);
console.log(
  "Food items with category grains:",
  listFoodItemsWithCategoryGrains(foodData)
);
console.log(
  "Food items with category dairy:",
  listFoodItemsWithCategoryDairy(foodData)
);
console.log(
  "Food items with calorie above 100:",
  listFoodItemsWithCalorieAbove100(foodData)
);
console.log(
  "Food items with calorie below 100:",
  listFoodItemsWithCalorieBelow100(foodData)
);
console.log(
  "Food items with highest protein content to lowest:",
  listFoodItemsWithHighestProteinContentToLowest(foodData)
);
console.log(
  "Food items with lowest carb content to highest:",
  listFoodItemsWithLowestCarbContentToHighest(foodData)
);
