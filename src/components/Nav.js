import "../App.css";
import Searchbar from "../components/Searchbar";
import { Link } from "react-router-dom";

export default function Nav(props) {
  console.log("this is nav props", props);
  return (
    <div>
      <div className="nav">
        <Link to="/" className="navLink">
          <div>Home</div>
        </Link>
        <Link to="/recipes" className="navLink">
          <div>Recipes</div>
        </Link>
        <Link to="/about" className="navLink">
          <div>About</div>
        </Link>
      </div>
      <div>
        <Searchbar recipesearch={props.getRecipe} />
      </div>
    </div>
  );
}
