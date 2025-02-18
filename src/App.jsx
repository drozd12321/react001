import { useState } from "react";
import styles from "./App.module.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Punct2 from "./components/Punct2/Punct2";
import Punct3 from "./components/Punct3/Punct3";
import Punct4 from "./components/Punct4/Punct4";
import Punct5 from "./components/Punct5/Punct5";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Punct2" element={<Punct2 />} />
        <Route path="/Punct3" element={<Punct3 />} />
        <Route path="/Punct4" element={<Punct4 />} />
        <Route path="/Punct5" element={<Punct5 />} />
      </Routes>
    </>
  );
}

export default App;
