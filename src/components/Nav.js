import "animate.css";

import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="//recipes" className="navLink">
        <div>Recipes</div>
      </Link>
      <Link to="/about" className="navLink">
        <div>About</div>
      </Link>
    </div>
  );
}
