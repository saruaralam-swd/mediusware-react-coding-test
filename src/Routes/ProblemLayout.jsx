import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProblemLayout = () => {
  return (
    <div>
      <div>
        <Link to="/problem1" className="btn btn-neutral">
          Problem 1
        </Link>
        <Link to="/problem2" className="btn btn-primary">
          Problem 2
        </Link>
      </div>

      <div className="my-5">
        <button className="btn btn-primary btn-sm rounded-md">All</button>
        <button className="btn btn-primary btn-sm rounded-md mx-5">
          Active
        </button>
        <button className="btn btn-primary btn-sm rounded-md">Complete</button>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default ProblemLayout;
