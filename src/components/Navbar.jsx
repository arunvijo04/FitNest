import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ username }) => (
  <nav className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Fitnest</h1>
      <div className="flex items-center gap-4">
        <span className="font-medium">{username}</span>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
