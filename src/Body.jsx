import React from "react";

import Carousal from "./Offer/Carousal";
import AppAD from "./Offer/AppAD";

const Body = () => {
  return (
    <div className="flex justify-center items-center w-[100vw]">
      <div className="md:w-[80%] w-[100%] border h-[auto] min-h-[300px] flex flex-col md:flex-row justify-center items-center">
        <Carousal />
        <AppAD />
      </div>
    </div>
  );
};

export default Body;
