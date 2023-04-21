import { useState } from "react";

export default function Form(props) {
  const [inputData, setInputData] = useState({
    searchTerm: "",
  });

  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.recipesearch(inputData.searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="searchbar">
        <input
          type="text"
          onChange={handleChange}
          placeholder="let's get cookin"
          defaultvalue={inputData.searchTerm}
          name="searchTerm"
        />
        <button type="submit" value="Submit Recipe" className="searchbtn">
          Search
        </button>
      </form>
    </div>
  );
}
