import { useState } from "react";
import "../App.css";

import { TiMessages } from "react-icons/ti";

import TopBar from "../Components/NavBar/TopBar";
import NavBar from "../Components/NavBar/NavBar";
import Login from "./Login";
import Body from "./Body";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[100%]">
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
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
