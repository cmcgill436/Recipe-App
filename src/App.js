import { Route, Routes } from "react-router-dom";

import Home from "./pages/Homepg";
import Recipes from "./pages/Recipes";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
//
