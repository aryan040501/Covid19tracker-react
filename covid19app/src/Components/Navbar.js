import React from 'react'
import {Link} from 'react-router-dom';
import "./Navbar.css";


function Navbar() {
    return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
            <li className="nav-bullet">
            <Link to="/" className="nav-item">
                Home
            </Link>
            </li>
          <li className="nav-bullet">
            <Link to="/Stats" className="nav-item">
                Stats
            </Link>
          </li>
          <li className="nav-bullet">
              <Link to="/Analyser" className="nav-item">
                  Analyser
              </Link>
          </li>
          </ul>
      </div>
      </nav>
      
    )
}

export default Navbar
