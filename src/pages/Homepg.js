import "animate.css";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

export default function Home() {
  const [recipe, setRecipe] = useState(null);

  const getRecipe = async (searchTerm) => {
    try {
      if (!searchTerm) {
        setRecipe(null);
        return;
      }
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();
      setRecipe(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div>
      <div className="header">
        <div className="title">
          <header className="animate__animated animate__bounceInDown">
            <Link to="/" className="navLink">
              <div>Recipe App</div>
            </Link>
          </header>
        </div>
        <Nav recipesearch={getRecipe} />
      </div>
      <div>
        <RecipeCard recipe={recipe} />
      </div>
    </div>
  );
}
