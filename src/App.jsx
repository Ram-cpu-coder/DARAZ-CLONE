import { useState } from "react";
import "./App.css";
import TopBar from "./NavBar/TopBar";
import NavBar from "./NavBar/NavBar";

import Carousal from "./Offer/Carousal";
import AppAD from "./Offer/AppAD";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopBar />
      <NavBar />
      {/* body */}
      <div className=" flex justify-center items-center">
        <div className="w-[80%] border min-h-[300px] h-[300px]">
          <Carousal />
          <AppAD />
        </div>
      </div>
    </>
  );
}

export default App;
