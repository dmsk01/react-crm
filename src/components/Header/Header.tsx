import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav className="header__menu">
        <ul className="header__list">
          <li className="header__item">
            <a href="#" className="header__link">
              List
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              Tasks
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              Schedule
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
