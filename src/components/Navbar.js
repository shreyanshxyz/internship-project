import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        margin: "0",
        paddingTop: "50px",
      }}
    >
      <nav>
        <div class="brand">
          <h3>MyBrand</h3>
        </div>
        <div class="navigation">
          <ul class="menu">
            <li>
              <a href="www.g.com">Home</a>
            </li>
            <li>
              <a href="www.g.com">Team</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
