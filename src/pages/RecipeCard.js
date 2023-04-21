import { Link } from "react-router-dom";

export default function RecipeCard({ recipe, id }) {
  const loaded = () => {
    return (
      <Link className="card" to={`/recipes/${id}`}>
        <div>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className="img" />
          <br />
          <button>{recipe.strMeal}</button>
          <button>{recipe.strArea}</button>
          <button>{recipe.strCategory}</button>
        </div>
      </Link>
    );
  };

  const loading = () => {
    return <h1>No Recipes to Display</h1>;
  };
  return recipe ? loaded() : loading();
}
