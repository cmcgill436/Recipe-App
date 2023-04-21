export default function RecipeCard({ recipe }) {
  const loaded = () => {
    return (
      <>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h1>{recipe.strMeal}</h1>
        <h2>{recipe.strArea}</h2>
        <h2>{recipe.strCategory}</h2>
      </>
    );
  };

  const loading = () => {
    return <h1>No Recipes to Display</h1>;
  };
  return recipe ? loaded() : loading();
}
