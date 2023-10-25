import React from "react";
import Logo from "../../images/react.png";
import "./layout.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <div className="navbar-heading">
            <img className="logo" src={Logo} alt="logo"></img>RouteOPedia
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={({isActive})=> isActive?"nav-link active text-danger":"nav-link"} aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=> isActive?"nav-link active text-danger":"nav-link"} to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=> isActive?"nav-link active text-danger":"nav-link"} to="/cryptodetail/BTC/10">
                  Crypto Detail
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
                <ul className="dropdown-menu">
                <li>
                    <NavLink className="dropdown-item" to="/product">
                      Product 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/product/list">
                      Product List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="product/details/1">
                      Product Details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/product/create">
                      Create Product
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
