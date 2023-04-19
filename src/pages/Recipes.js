import RecipeCard from "../pages/RecipeCard";
import { useState, useEffect } from "react";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "73bef7d77amshe81b01d802bb0d5p1490ddjsn3089b87eafeb",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };

    fetch(
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response));
    setRecipes(response).catch((err) => console.error(err));
  };

  const cards = () => {
    return recipes.map((recipe, i) => {
      return <RecipeCard key={i} title={recipe.name} />;
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return <div>{recipes?.results?.length === 0 ? "loading" : cards()}</div>;
}
