import React from "react";
import Image from "@/assets/bBC.jpeg";
import ShortImage from "@/assets/Short.jpeg";

export const ShortProcpectas = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2">
        <img className="h-auto" src={Image} alt="" />
        <img className="" src={ShortImage} alt="" />
      </div>
    </div>
  );
};
