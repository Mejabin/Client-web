import React from "react";
import FoodImage from "../../assets/Food.jpeg"; // Assuming Food.jpeg is the correct file path

export default function FoodComponent() {
  return (
    <div className="container mx-auto">
      <img src={FoodImage} alt="" />
    </div>
  );
}
