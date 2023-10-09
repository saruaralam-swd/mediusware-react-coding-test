import React from "react";
import { Link, NavLink } from "react-router-dom";

const Button = () => {
  return (
    <div className="max-w-5xl">
      <div className="text-center my-5 space-x-2">
        <NavLink
          to="/problem1"
          className={({ isActive }) =>
            isActive
              ? "bg-black rounded-md px-5 py-3 text-white"
              : "bg-blue-500 hover:bg-blue-600 rounded-md px-5 py-3 text-white"
          }
        >
          Problem 1
        </NavLink>

        <NavLink
          to="/problem2"
          className={({ isActive }) =>
            isActive
              ? "bg-black rounded-md px-5 py-3 text-white"
              : "bg-blue-500 hover:bg-blue-600 rounded-md px-5 py-3 text-white"
          }
        >
          Problem 2
        </NavLink>
      </div>
    </div>
  );
};

export default Button;
