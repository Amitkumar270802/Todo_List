import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-black text-white p-4 gap-x-6 justify-center items-center ">
      <Link className="bg-blue-900 p-2 rounded-xl" to="/">
        React Redux Toolkit Todo
      </Link>
      <Link className="bg-blue-900 p-2 rounded-xl" to="/react">
        React Todo
      </Link>
    </div>
  );
};

export default Navbar;
