import "animate.css";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

export default function Home({ setData }) {
  const [recipe, setRecipe] = useState(undefined);
  const [recipeCard, setrecipeCard] = useState(undefined);

  const getRecipe = async (searchTerm) => {
    try {
      if (!searchTerm) {
        setRecipe("");
        return;
      }
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();
      setRecipe(data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setrecipeCard(
      recipe?.meals.map((recipe, i) => {
        return <RecipeCard key={i} recipe={recipe} id={i} />;
      })
    );
  }, [recipe]);
  console.log(recipe, "i am here");
  console.log(recipeCard, "I am there");
  // let recipes = undefined;
  // if (recipe?.length > 0) {
  //   recipes = recipe.meals.map((recipe, i) => {
  //     return <RecipeCard key={i} recipe={recipe} />;
  //   });

  return (
    <div className="homepage">
      <div className="header">
        <div className="title">
          <header className="animate__animated animate__flip">
            <Link to="/" className="navLink">
              <div className="animate__animated  animate__bounceInDown">
                RecipeApp
              </div>
            </Link>
          </header>
        </div>
        <Nav getRecipe={getRecipe} />
      </div>
      <div className="maincontent">{recipeCard}</div>
    </div>
  );
}
