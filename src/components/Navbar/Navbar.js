import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
import Logo from "./assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar">
      <img src={Logo} className="logo" />

      <ul className={click ? "nav-options active" : "nav-options"}>
        <li className="option" onClick={closeMobileMenu}>
          <Link to="/">Home</Link>
        </li>

        <li className="option" onClick={closeMobileMenu}>
          <Link to="/Stats">Stats</Link>
        </li>

        <li className="option" onClick={closeMobileMenu}>
          <Link to="/Analyser">Analyser</Link>
        </li>
      </ul>

      {/* Mobile menu handling click */}
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
