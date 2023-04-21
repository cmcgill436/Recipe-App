import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Homepg";
import Recipes from "./pages/Recipes";
import About from "./pages/About";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home setData={setData} />} />
        <Route path="/recipes/:name" element={<Recipes data={data} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
//
