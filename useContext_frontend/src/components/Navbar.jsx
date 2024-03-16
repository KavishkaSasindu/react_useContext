import React from "react";
import { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [logIn, setLogIn] = useState(true);
  return (
    <div>
      <div className="navbar-inner">
        {logIn && (
          <div className="navbar-outer">
            <div className="logo">
              <h4>Logo</h4>
            </div>
            <div className="list-items">
              <ul>
                <li>contact</li>
                <li>admin</li>
                <li>logout</li>
              </ul>
            </div>
          </div>
        )}
        {!logIn && (
          <div className="navbar-outer">
            <div className="logo">
              <h4>Logo</h4>
            </div>
            <div className="list-items">
              <ul>
                <li>contact</li>
                <li>admin</li>
                <li>signIn</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
