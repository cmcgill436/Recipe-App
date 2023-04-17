import "./App.css";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Homepg";
import About from "./pages/Homepg";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
