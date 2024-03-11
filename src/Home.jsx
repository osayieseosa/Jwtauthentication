import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid w-full h-screen place-content-center gap-5">
      <h1>Welcome to the home page</h1>
      <Link to="/auth" className=" text-sm py-2 px-4 bg-blue-400 w-max">
        Sign up or Log in
      </Link>
    </div>
  );
};

export default Home;
