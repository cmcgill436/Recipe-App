import "../Homepg.css";
import "animate.css";
import Nav from "../components/Nav";

export default function Home(props) {
  return (
    <div className="home-body">
      <header class="animate__animated animate__bounceInDown">
        Recipe App
      </header>
      <Nav />
    </div>
  );
}
