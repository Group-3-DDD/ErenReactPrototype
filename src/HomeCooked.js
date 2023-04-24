import React, { useState } from 'react';
import './App.css';

const allMeals = [
  'Pizza', 
  'Burger', 
  'Pasta', 
  'Sushi', 
  'Tacos', 
  'Curry', 
  'Stir Fry'
];

const recipeLinks = [
  'https://example.com/pizza-recipe.html', 
  'https://example.com/burger-recipe.html', 
  'https://example.com/pasta-recipe.html', 
  'https://example.com/sushi-recipe.html', 
  'https://example.com/tacos-recipe.html', 
  'https://example.com/curry-recipe.html', 
  'https://example.com/stir-fry-recipe.html'
];

const vegMeals = [
  'Margherita Pizza', 
  'Veggie Burger', 
  'Pasta Primavera', 
  'Vegetable Sushi Rolls', 
  'Veggie Tacos', 
  'Vegetable Curry', 
  'Vegetable Stir Fry'
];

const vegRecipeLinks = [
  'https://example.com/margherita-pizza-recipe.html', 
  'https://example.com/veggie-burger-recipe.html', 
  'https://example.com/pasta-primavera-recipe.html', 
  'https://example.com/vegetable-sushi-rolls-recipe.html', 
  'https://example.com/veggie-tacos-recipe.html', 
  'https://example.com/vegetable-curry-recipe.html', 
  'https://example.com/vegetable-stir-fry-recipe.html'
];

const glutenFreeMeals = [
  'Gluten-Free Pizza', 
  'Lettuce-Wrapped Burger', 
  'Gluten-Free Pasta', 
  'Sashimi', 
  'Gluten-Free Tacos', 
  'Gluten-Free Curry', 
  'Gluten-Free Stir Fry'
];

const glutenFreeRecipeLinks = [
  'https://example.com/gluten-free-pizza-recipe.html', 
  'https://example.com/lettuce-wrapped-burger-recipe.html', 
  'https://example.com/gluten-free-pasta-recipe.html', 
  'https://example.com/sashimi-recipe.html', 
  'https://example.com/gluten-free-tacos-recipe.html', 
  'https://example.com/gluten-free-curry-recipe.html', 
  'https://example.com/gluten-free-stir-fry-recipe.html'
];

function App() {
  const [meal, setMeal] = useState('');
  const [recipeLink, setRecipeLink] = useState('');

  const getRandomMeal = (mealList, recipeLinkList) => {
    const randomIndex = Math.floor(Math.random() * mealList.length);
    setMeal(mealList[randomIndex]);
    setRecipeLink(recipeLinkList[randomIndex]);
  };

  return (
    <div className="App">
      <h1>What's for Dinner?</h1>
      <button onClick={() => getRandomMeal(allMeals, recipeLinks)}>Random Meal</button>
      <button onClick={() => getRandomMeal(vegMeals, vegRecipeLinks)}>Vegetarian Meal</button>
      <button onClick={() => getRandomMeal(glutenFreeMeals, glutenFreeRecipeLinks)}>Gluten-Free Meal</button>
      {meal && (
        <>
          <p>{`How about ${meal}?`}</p>
          <a href={recipeLink} target="_blank" rel="noreferrer">
            View
          </a>
        </>
      )}
    </div>
  );
}

export default App;