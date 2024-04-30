import React from "react";
import Long from "@/assets/long.jpeg";
import Long1 from "@/assets/long2.jpeg";
import Long2 from "@/assets/long3.jpeg";
import Long3 from "@/assets/long4.jpeg";

export const LongProcpectas = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <img className="h-auto" src={Long} alt="" />
        <img className="" src={Long1} alt="" />
        <img className="" src={Long2} alt="" />
        <img className="" src={Long3} alt="" />
      </div>
    </div>
  );
};
