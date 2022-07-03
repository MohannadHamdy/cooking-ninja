import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h2>Home</h2>
        </Link>
        <Link to="/create">
          <h2>Create Recipe</h2>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
