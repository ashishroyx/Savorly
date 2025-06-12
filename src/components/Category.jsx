import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <div className="flex gap-6 items-center text-white text-lg font-semibold">
      <NavLink to={'/items/Italian'}>

      <div className="flex flex-col items-center hover:scale-110 transition">
        <FaPizzaSlice className="text-2xl mb-1" />
        <h4>Italian</h4>
      </div>
      </NavLink>
      <NavLink to={'/items/American'}>

      <div className="flex flex-col items-center hover:scale-110 transition">
        <FaHamburger className="text-2xl mb-1" />
        <h4>American</h4>
      </div>
      </NavLink>
      <NavLink to={'/items/Thai'}>
      <div className="flex flex-col items-center hover:scale-110 transition">
        <GiNoodles className="text-2xl mb-1" />
        <h4>Thai</h4>
      </div>
      </NavLink>
      <NavLink to={'/items/Japanese'}>
      <div className="flex flex-col items-center hover:scale-110 transition">
        <GiChopsticks className="text-2xl mb-1" />
        <h4>Japanese</h4>
      </div>
      </NavLink>
    </div>
  );
}

export default Category;
