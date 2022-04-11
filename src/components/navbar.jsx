import React from "react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar-header">
      <a className="navbar-title" href="/">
        Whats Cooking?
      </a>

      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <a href="search">Search</a>
        </li>
      </ul>
    </div>

    // <React.Fragment>
    //   <div className="navbar-header">
    //     <a className="navbar-title" href="/">
    //       Shagger
    //     </a>
    //   </div>
    //   <div className="navbar-bottom">
    //     <ul className="navbar-bottom-menu">
    //       <li className="navbar-bottom-menu-item">
    //         <a href="#home">Home</a>
    //       </li>
    //       <li className="navbar-bottom-menu-item">
    //         <a href="#news">News</a>
    //       </li>
    //       <li className="navbar-bottom-menu-item">
    //         <a href="#contact">Contact</a>
    //       </li>
    //       <li className="navbar-bottom-menu-item">
    //         <a href="#about">About</a>
    //       </li>
    //     </ul>
    //   </div>
    // </React.Fragment>
  );
}

export default Navbar;
