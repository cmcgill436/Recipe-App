import "../Homep    g.css";
import "animate.css";
import Nav from "../components/Nav";

export default function Home(props) {
  return (
    <div className="home-body">
      <Nav />
      <h1 class="animate__animated animate__bounceInDown">Recipe App</h1>
    </div>
  );
}
