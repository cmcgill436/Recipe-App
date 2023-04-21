import React, { useState, useEffect } from "react";

export default function Recipes() {
  const [recipe, setRecipe] = useState("");

  const [container, setcontainer] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  fetch(
    "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  // useEffect(() => {
  //   getrecipes();
  // }, []);

  return <div></div>;
}
