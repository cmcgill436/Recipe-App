import React, { useState } from "react";

export default function Form(props) {
  console.log(props);
  const [inputData, setInputData] = useState({
    searchTerm: "",
  });

  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.getRecipe(inputData.searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="searchbar">
        <input
          type="text"
          onChange={handleChange}
          placeholder="let's get cookin"
          value={inputData.searchTerm}
          name="searchTerm"
        />
        <button type="submit" value="Submit Recipe" className="searchbtn">
          Search
        </button>
      </form>
    </div>
  );
}
