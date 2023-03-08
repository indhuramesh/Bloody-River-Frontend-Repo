import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";



function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Bloody River
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

           
            <li className="nav-item">
              <NavLink
                exact
                to="/Signup"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Blood"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Available Blood Samples
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Update"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Update the records
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Delete"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Delete the record
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;