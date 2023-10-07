import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Link to="/problem1" className="btn btn-neutral">
          Problem 1
        </Link>
        <Link to="/problem2" className="btn btn-primary">
          Problem 2
        </Link>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
