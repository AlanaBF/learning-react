import React from "react";
import Logo from "../../images/react.png";
import "./layout.css"
function Header() {
  return (
    <div>
      <nav className="navbar">
        <div>
          <h1 className="navbar-heading"><img className="logo" src={Logo} alt="logo"></img>WatchOPedia</h1>
        </div>
      </nav>
    </div>
  );
}

export default Header;
