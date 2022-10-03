import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <NavLink className="link" to="/">
              ACCUEIL
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">
              A PROPOS
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
