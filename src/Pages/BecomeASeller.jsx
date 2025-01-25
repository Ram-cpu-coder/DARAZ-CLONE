import React from "react";
import { Dropdown } from "flowbite-react";
import country from "../Data/country";
const BecomeASeller = () => {
  // const eachItem = country.map((item) => {
  //   return item.country && item.imgSrc;
  // });
  // console.log(eachItem);
  return (
    <nav className="h-[75px] w-screen flex items-center justify-between bg-white fixed top-0 z-50">
      <div>
        <img
          src="https://img.alicdn.com/imgextra/i3/O1CN01ovcTAV1WBY7oOmozh_!!6000000002750-55-tps-323-127.svg"
          alt=""
          className="h-[60px] w-auto mx-4 m-2"
        />
      </div>
      <Dropdown
        label="Dropdown button"
        dismissOnClick={false}
        className="border-none m-2 min-w-[80px] focus:ring-white"
      >
        {country.map((item) => {
          return (
            <Dropdown.Item className="flex gap-3 justify-center">
              <img src={item.imgSrc} alt={item.country} className="h-[25px]" />
              {item.country}
            </Dropdown.Item>
          );
        })}
      </Dropdown>
      {/* <div>
        
         
        <select className=" m-2 mr-5 border-none focus:ring-white">
          <option>English</option>
          <option>Nepali</option>
        </select>
      </div> */}
    </nav>
  );
};

export default BecomeASeller;
