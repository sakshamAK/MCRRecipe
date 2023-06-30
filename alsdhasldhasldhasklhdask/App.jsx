import "./styles.css";
import { SinglePage } from "./SinglePage";
import { Landing } from "./Landing";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import data from "./data.json";


export default function App() {
  const [recipe, setRecipe] = useState(data);
  return (
    <Routes>
      <Route path="/" element={<Landing recipe={recipe} setRecipe={setRecipe} />} />
      <Route path="/:id" element={<SinglePage  recipes={recipe} />} />
    </Routes>
  );
}

// Recipe Organizer App:
// Ability to add, modify, delete recipes
// List all recipes
// Search receipes by name, ingredients, cuisine (make radio buttons)
// recipe detail page

/**
 * name: asldasd
 * cuisine: indian, italian
 * description: asdkasdh
 * Ingredients: asdasdas
 * photos: adasd
 */
