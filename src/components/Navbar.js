import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "./navbar.css";

const Navbar = () => {
  const { color, changeColor } = useContext(ThemeContext);
  return (
    <div className="navbar" style={{ background: color }}>
      <nav onClick={() => changeColor("black")}>
        <Link to="/" className="brand">
          <h2>Home</h2>
        </Link>
        <Link to="/create">
          <h3>Create Recipe</h3>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
