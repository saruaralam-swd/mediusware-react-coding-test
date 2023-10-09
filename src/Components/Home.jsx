import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center max-w-5xl">
      <div>
        <Link to="/problem1" className="btn btn-neutral mr-2">
          Problem 1
        </Link>
        <Link to="/problem2" className="btn btn-primary">
          Problem 2
        </Link>
      </div>
    </div>
  );
};

export default Home;
