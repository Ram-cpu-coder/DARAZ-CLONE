import { useState } from "react";
import "./App.css";
import TopBar from "./NavBar/TopBar";
import NavBar from "./NavBar/NavBar";

import Body from "./Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[100vw]">
      <TopBar />
      <NavBar />
      <Body />
    </div>
  );
}

export default App;
