"use client";
import React from "react";

import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const BreadCrumbForCards = () => {
  return (
    <Breadcrumb aria-label="" className="px-5 py-3 bg-[#eff0f5] w-[80%]">
      <Breadcrumb.Item href="#" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
      <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumbForCards;
