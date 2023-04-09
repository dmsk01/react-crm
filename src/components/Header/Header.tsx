import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import cn from "classnames";

function Header() {
  return (
    <header className="header mb-4">
      <nav className="header__menu navbar navbar-dark bg-dark">
        <div className="header__container container">
          <ul className="header__list">
            <li className="header__item">
              <NavLink to="/" className="header__link">
                List
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/tasks" className="header__link">
                Tasks
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/schedule" className="header__link">
                Schedule
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
