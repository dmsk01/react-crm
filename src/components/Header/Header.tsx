import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="header__menu">
        <ul className="header__list">
          <li className="header__item">
            <Link to="/" className="header__link">
              List
            </Link>
          </li>
          <li className="header__item">
            <Link to="/tasks" className="header__link">
              Tasks
            </Link>
          </li>
          <li className="header__item">
            <Link to="/schedule" className="header__link">
              Schedule
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
