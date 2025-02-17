import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import Home from "./components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.App}>
      <Home />
    </div>
  );
}

export default App;
