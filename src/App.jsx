import { useState } from "react";
import "./App.css";

import { TiMessages } from "react-icons/ti";

import TopBar from "./NavBar/TopBar";
import NavBar from "./NavBar/NavBar";

import Body from "./Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[100%]">
      <TopBar />
      <NavBar />
      <Body />
      <div className="fixed bottom-1 right-[30px] shadow">
        <button className="flex items-center gap-2 border px-3">
          <TiMessages /> Messages
        </button>
      </div>
    </div>
  );
}

export default App;
